import postgres from "postgres";

type QueryResult = Record<string, unknown>;
let client: ReturnType<typeof postgres> | null = null;

function sqlClient() {
  if (client) return client;
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is missing. Add a Postgres database in Vercel and redeploy.");
  client = postgres(databaseUrl, {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 15,
    prepare: false,
  });
  return client;
}

function postgresPlaceholders(query: string) {
  let index = 0;
  return query.replace(/\?/g, () => `$${++index}`);
}

class Statement {
  private values: unknown[] = [];
  constructor(private readonly query: string) {}
  bind(...values: unknown[]) { this.values = values; return this; }
  async rows() {
    return sqlClient().unsafe(postgresPlaceholders(this.query), this.values as never[]) as Promise<QueryResult[]>;
  }
  async first<T>() { const rows = await this.rows(); return (rows[0] as T | undefined) ?? null; }
  async all() { return { results: await this.rows() }; }
  async run() { await this.rows(); return { success: true }; }
}

const rawClient = {
  prepare(query: string) { return new Statement(query); },
  async batch(statements: Statement[]) {
    const results = [];
    for (const statement of statements) results.push(await statement.run());
    return results;
  },
};

export async function getDb() {
  return { $client: rawClient };
}

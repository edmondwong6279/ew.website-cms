module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "ew_website_cms"),
      user: env("DATABASE_USERNAME", "ed.wong"),
      password: env("DATABASE_PASSWORD", ""),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: env.bool(true),
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
    debug: false,
  },
});

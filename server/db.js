import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    password: "Shilp24-PSQL",
    host: "34.131.142.222",
    port: 5432,
    database: "shilp24"
});

export default pool;
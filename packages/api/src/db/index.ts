import * as dotenv from "dotenv";
import { Pool } from 'pg';

dotenv.config()

const connectionString = process.env.POSTGRESQL_URL_DEV

const pool = new Pool ({
    connectionString,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0,
});

export default pool;
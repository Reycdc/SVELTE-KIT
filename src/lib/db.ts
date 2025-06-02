import { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT } from '$env/static/private';
import mariadb from 'mariadb';

let pool: mariadb.Pool | null = null;

export const getPool = () => {
  if (pool) return pool;

  const config: mariadb.PoolConfig = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: parseInt(DB_PORT),
    connectionLimit: 5,
    multipleStatements: true,
    bigIntAsNumber: true,
  };

  pool = mariadb.createPool(config);
  return pool;
};
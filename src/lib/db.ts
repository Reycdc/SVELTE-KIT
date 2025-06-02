import { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT } from '$env/static/private';
import mariadb from 'mariadb';

let pool: mariadb.Pool | null = null;

export const getPool = () => {
  if (pool) return pool;

  const config: mariadb.PoolConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'SVELTE_KIT',
    port: parseInt('3306'),
    connectionLimit: 5,
    multipleStatements: true,
    bigIntAsNumber: true,
  };

  pool = mariadb.createPool(config);
  return pool;
};
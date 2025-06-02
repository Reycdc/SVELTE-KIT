import { getPool } from '$lib/db';
import type { PageServerLoad } from './$types';

interface Film {
  film_id: number;
  film_judul: string;
  film_tahun: number;
  film_durasi: number;
  film_bahasa: string;
  film_tanggal_rilis: string;
  film_negara_rilis: string;
}

export const load: PageServerLoad = async ({ url }) => {
  const pool = getPool();
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = 5;

  const totalFilm = await pool.query('SELECT COUNT(*) AS total FROM film');
  console.log(totalFilm);
  const offset = (page - 1) * limit;
  const film = await pool.query('SELECT * FROM film LIMIT ? OFFSET ?', [limit, offset]);

  return {
    film: film as Film[],
    page,
    totalFilm: totalFilm[0].total
  }
}
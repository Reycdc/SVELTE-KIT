import { getPool } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');

    const pool = getPool();
    const totalFilm = await pool.query('SELECT COUNT(*) AS total FROM film');
    const offset = (page - 1) * limit;
    const film = await pool.query('SELECT * FROM film LIMIT ? OFFSET ?', [limit, offset]);

    return json({
        film,
        page,
        totalFilm: totalFilm[0].total
    });
}
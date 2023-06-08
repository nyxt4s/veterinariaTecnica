import { Pool } from "pg";

const pool = new Pool({
  user: 'veterinaria',
  host: 'localhost',
  database: 'postgres',
  password: 'medina12',
  port: 5432,
});

const getRaza = (request, response) => {
    pool.query('SELECT * FROM Raza', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// module.exports = pool;
module.exports = {
    getRaza
}
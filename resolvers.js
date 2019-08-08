/* TODO Connect to pg database and build resolver data
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

let r;

try {
    const client = pool.connect()
    const result = client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null };
    r = results;
    client.release();
} catch (err){
    console.error(err);
}
*/

// Some fake data
const books = [
    {
      title: "Harry Potter and the Sorcerer's stone",
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton - foo',
    },
];

// The resolvers
const resolvers = {
Query: { books: () => books },
};

module.exports = resolvers;
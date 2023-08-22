import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Hello@14385",
  database: "afzal",
  waitForConnections: true,
  connectionLimit: 1,
});

async function iud(query, array) {
  try {
    console.log("Trying to iud data");
    const [result] = await pool.execute(query, [array]);
    console.log("Inserted ID:", result.insertId);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    pool.releaseConnection();
  }
}

async function search(query, array) {
  try {
    console.log("Trying to search data");
    const data = await pool.execute(query, array);
    console.log("Search results:", data);
    return data;
  } catch (error) {
    console.error("Error searching data:", error);
  } finally {
    pool.releaseConnection();
  }
}

export { pool, iud, search };

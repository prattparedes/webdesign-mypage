const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "miauri123",
  database: "myweb",
  port: "5432",
});

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM accounts");
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(`SELECT * FROM accounts WHERE id = ${id}`);
  res.json(response.rows);
};

const createUser = async (req, res) => {
  const user = req.body
    const response = await pool.query(
      `INSERT INTO accounts (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`,
    );
  console.log(response);
  res.send("user created successfully" + response.rows);
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
};

const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysq/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1"
};



async function selectMessage(chatapp) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `SELECT * FROM chatapp`;
  // let sql = `SELECT * FROM user ORDER BY ID DESC`;
  // let sql = `SELECT * FROM user WHERE ID=?`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  return list;
};
selectMessage();
async function addMessage(chatapp) {

  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection establish");

  let sql = `insert into chatapp(message) values(?)`;
  await connection.queryAsync(sql, [chatapp.message]);
  await connection.endAsync();

};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo)
  await connection.connectAsync();

  console.log("Connection Succes!!");

  await connection.endAsync();
}
connectionCheck();
// const user = { username: "1", password: "123" };
// adduser(user);
module.exports = {
  addMessage,
  selectMessage,

};
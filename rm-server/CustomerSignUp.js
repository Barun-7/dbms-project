const express = require("express"); 
const mysql = require("mysql");
const app = express(); 


const db= mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'mysql',
  database: 'dbms',
});

  app.post('/create-user',(req, res) => {
    const username = req.body.username;
    const userId = req.body.username+"";
    const email = req.body.email;
    const password = req.body.username;

  db.query("INSERT INTO Customers (CustomerId, Name, Email, Password, Phone Number ) VALUES ('username,userId, email, password);")
  }),(err, result) => {
    if(err){
    console.log(err);
  } else{
    res.send("Values Inserted")
  }
}

app.listen(3001, () => {
  console.log("running server"); 
});
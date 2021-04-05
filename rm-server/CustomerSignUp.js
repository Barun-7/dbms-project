const express = require("express"); 
const mysql = require("mysql");
const app = express(); 
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "dbms",
});

app.post("/create-user", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const userId = req.body.phonenumber;
  const password = req.body.password;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;

  
db.query("INSERT INTO customer (CustomerId, Name, Email, Password, PhoneNumber) VALUES (?,?,?,?,?)",
    [userId, name, email, password, phonenumber],
    (err, result) => {
      if(err){
      console.log(err);
    } else{
      res.send("Values Inserted")
    }
  }
  );
});

app.listen(3001, () => {
  console.log("running server"); 
});
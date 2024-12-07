import express from "express";
import mysql from "mysql"

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "printf()",
    database: "marketplace"
})

app.get("/users_informations", (req, res) => {
    const q = "SELECT * FROM users_informations";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.send(data);
    });
})

app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.listen(8800, () => {
    console.log("Backend server is running!");
});
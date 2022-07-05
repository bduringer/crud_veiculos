const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "password",
    database: "crud_veiculos"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res)=>{
   const {name} = req.body;
   const {type} = req.body;
   const {color} = req.body;
   const {year} = req.body;
   const {plaque} = req.body;
   let SQL = "INSERT INTO veiculos (name, type, color, year, plaque) VALUES ( ?, ?, ?, ?, ?)";
   db.query(SQL,[name, type, color, year, plaque], (err, result)=>{
    if (err) console.log(err)
    else res.send(result);
   })
})

app.get("/getCards", (req,res)=>{
    let SQL = "SELECT * from crud_veiculos.veiculos";
    db.query(SQL, (err, result)=>{
        if(err) console.log(err)
        else res.send(result);
    })
})

app.put("/edit", (req,res)=>{
    const { id } = req.body;
    const { name } = req.body;
    const { type } = req.body;
    const { color } = req.body;
    const { year } = req.body;
    const { plaque } = req.body;

    let SQL = "UPDATE veiculos SET name = ? , type = ? , color = ? , year = ? , plaque = ? WHERE idvaiculos = ?  "
    db.query(SQL,[name, type, color, year, plaque, id], (err, result)=>{
        if(err) console.log(err)
        else res.send(result)
    })

})

app.delete("/delete/:id", (req, res)=>{
    const {id} = req.params;
    let SQL = "DELETE FROM veiculos WHERE idvaiculos = ?";
    db.query(SQL,[id], (err, result)=>{
        if (err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, () =>{
    console.log("rodando servidor")
});
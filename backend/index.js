const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'device_manager',
    port:'3306'
});

db.connect(err=>{
   if(err){ 
    console.log('error while connecting to database!');
} else{
    console.log('connected to database!')
}});

app.listen(3000, () =>{
    console.log('listenin');
});

//get all categories 
app.get("/category", (req, res) =>{
    let qr = 'SELECT * FROM CATEGORY'
    db.query(qr, (err, result)=>{
        if(err){
            console.log(err)
        }else{
           if(result.length > 0){
               res.send({message: 'category list', data: result});
           }
        }
    });
});

//add new category 
app.post("/category", (req, res) =>{

    let name = req.body.CategoryName;
    let qr = `INSERT INTO CATEGORY SET CategoryName =  '${name}'`

    db.query(qr, (err, result) =>{
        if(err){
            console.log(err)
        }else{ 
            res.send({message: 'category created!', data: result});  
        }
    });
});

//delete category 
app.delete("/category", (req, res) =>{

    let{id}  = req.query;
    let qr = `DELETE FROM CATEGORY WHERE Id  ='${id}'`
    db.query(qr, (err, result) =>{
        if(err){
        }else{ 
            res.send({message: 'category was removed!', data: result});  
        }
    });
});


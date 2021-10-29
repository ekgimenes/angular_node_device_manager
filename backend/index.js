const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

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

app.listen(3000, ()=>{
    console.log('running...');
});

app.get("/category", (req, res)=>{

    let qr = 'select * from category'
    db.query(qr, (err, result)=>{
        if(err){
            console.log('error receiving data!')
        }else{
           if(result.length > 0){
               res.send({message: 'category', data: result});
           }

        }
    });
});


const express = require('express')
const cloudinary=require('cloudinary').v2
const expfileupload=require('express-fileupload')
const bodyparser=require('body-parser')
var inshorts= require('inshorts').init();


// authenticating cloudinary
cloudinary.config({ 
  cloud_name: 'dhz8n0ka8', 
  api_key: '292185978668497', 
  api_secret: 'g4cm_1q9jz90fNF2l8Mmb-p527Y',
  secure: true
});

// initializing express instance
const app=express()
app.use(expfileupload({useTempFiles:true,tempFileDir:"/tmp/"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const mysql=require('mysql2')

// authenticating mysql
const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'nitwarangal@3',
  port:3306,
  database:'22yards'
})



// const CREATETABLEQUERY=`CREATE TABLE IF NOT EXISTS users(
//     cric_index INT AUTO_INCREMENT,
//     dp varchar(100),
//     primary key (cric_index)
// );`

// connection.query(CREATETABLEQUERY,(error,results,fields)=>{
//     if(error){
//        console.log(error)
//     }
//     else{
//       console.log("Table Created Successfully")
//     }
// })


// app.post('/upload-dp',async (req,res)=>{
//     const data=await cloudinary.uploader.upload(req.files.img_upl.tempFilePath)
//     const insertDpQuery=`insert into users (dp)
//      values(?);`

//     connection.query(insertDpQuery,[data.url],(error,result,fields)=>{
//        if(error){
//          console.log(error)
//        }
//        else{
//          console.log("Inserted into DB successfully")
//        }
//     })
//     res.send("ImageUploaded")
// })

// app.get('/images',async(req,res)=>{
//      const getDp=`select * from users;`

//      connection.query(getDp,(error,result,fields)=>{
//          if(error) console.log(error)
//          else{
//            res.send(result)
//          }
//      })
// })


app.listen(1337,()=>{
  console.log("Iam running on port 1337")
  })

inshorts.getNews('sports',function(err,result){
  console.log("Iam IN")
  if(!err)
  console.log(result);
  else
  console.log(err);
});

inshorts.getNews



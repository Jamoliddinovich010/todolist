//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let listitems=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('list',{kindofitems:listitems})

})

app.post('/',(req,res)=>{
let item = req.body.item;
listitems.push(item);
res.redirect('/');

})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
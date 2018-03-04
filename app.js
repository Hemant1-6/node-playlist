var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/stuff",express.static("stuff"));

app.set('view engine','ejs');
app.get('/',(req,res)=>{
res.render("index");
});

app.get('/contacts',(req,res)=>{
    res.render("contacts",{qs : req.query});
    });
    
    app.post('/contacts',urlencodedParser,(req,res)=>{    
        res.render("contact-success",{data : req.body});
        });

app.get('/profile/:name',(req,res)=>{
    var data = {
        age : 20,
        job : 'ninja',
        hobbies : ["fishing","dancing","reading"]
    }
res.render('profile',{name : req.params.name , data});
});

app.listen(3000);
console.log('listening to port 3000');
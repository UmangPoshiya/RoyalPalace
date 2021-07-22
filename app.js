const express = require("express");
const path = require("path");

const bodyparser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://umangposhiya:Umang@1408@cluster0.97hfv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true});


const app = express();
const port = process.env.PORT || 800;


// define mongoose schema
const feedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String
});


const Feedback = mongoose.model('Feedback', feedbackSchema);

app.use(bodyparser.urlencoded({
    extended: true
}))

// static specific stuff
app.use(express.static(__dirname));


// pug specific stuff
app.get('/',function(req,res) {
    res.sendFile(__dirname+'/view/Home.html');
  });
app.get('/home',function(req,res) {
    res.sendFile(__dirname+'/view/Home.html');
  });
app.get('/aboutus',function(req,res) {
    res.sendFile(__dirname+'/view/AboutUs.html');
  });
app.get('/membership',function(req,res) {
    res.sendFile(__dirname+'/view/Membership.html');
  });
app.get('/contact',function(req,res) {
    res.sendFile(__dirname+'/view/Contact.html');
  });






app.post("/contact", (req, res) => {
    const myData = new Feedback(req.body);
    myData.save().then(() => {
        // res.send("Your Responce is recorded and saved to data base");
        res.sendFile(__dirname+'/view/goback.html');
        console.log(req.body.name);
    }).catch(() => {
        res.status(400).send(" Currently Unable to save data in database Please contact us via mail")
    })
    // res.status(200).render('contact.pug');
})


// START THE SERVER
app.listen(port, () => {
    console.log('The Application started succesfully on port 800');
})
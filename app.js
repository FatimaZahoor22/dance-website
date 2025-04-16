const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

// define mongoose 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
  });
  const Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded())
// Set view engine and views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/' , (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact' , (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.listen(port, () => {
    console.log(`This application started successfully on port ${port}`);
});
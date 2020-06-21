const express = require('express');
const bcrypt = require('bcrypt');
const Cookies = require('cookies');
const app = express()
const port = 3000

let keys = ['thisismykey'];

app.use(express.static(__dirname + '/public'))

app.get('/login', [login, sendFile]);

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

app.listen(port, () => console.log(`Express server running on port ${port}`));
     
    
function login(req, res, next) {
    let cookies = new Cookies(req, res, {keys: keys})
    res.locals.lastVisit = cookies.get('lastVisit', { signed: true })
    cookies.set('lastVisit', new Date(), { signed: true })
    if(!res.locals.lastVisit) {
        res.locals.login = true
    } else {
        res.locals.login = false
    }
    next();
};

function sendFile(req, res) {
    if(res.locals.login) {
        res.send("Welome stranger")
        //res.sendFile(__dirname + '/main.html');
    } else {
        res.send(`Welcome back. You're cookie is ${res.locals.lastVisit}`)
    }
    
};
 
  
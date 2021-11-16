const express = require('express');
const app = express();

app.get('/aboutMe/:hobby', (req, res) => {
    
    if (isNaN(req.params)) {                 //check if the parameter retrieved is a number
        res.status(400).send('Bad request!') //error handler
    } else {
        console.log("req.params: ", req.params)         //return req.params: { "hobby": "swimming"}
        res.send(`My hobby is ${req.params.hobby}`)
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));


const express = require('express');
const app = express();

app.use(express.static('public/form.html'));

app.get('/', (req, res) => {
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));


const express = require('express');
const app = express();

app.use(express.static('public/picture.html'));

app.get('/', (req, res) => {
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

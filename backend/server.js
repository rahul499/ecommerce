import express from 'express';
import data from './data';
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register= require('./controllers/register')
const signin= require('./controllers/signin')
const createOrder= require('./controllers/createOrder')

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'rahul499',
      database : 'hotpicks'
   }
});


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if(product)
    res.send(product);
    else
    res.status(404).send({msg: "Product Not Found. "});
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.post('/registeruser', (req, res) => {
    register.handleRegister(req, res, db, bcrypt) 
})

app.post('/signinuser', (req, res) => {
    signin.handleSignIn(req, res, db, bcrypt) 
})

app.post('/createorder', (req, res) => {
    createOrder.handleCreateOrder(req, res, db);
})


app.listen(5000, () => {console.log("Server started at http://localhost:5000")})


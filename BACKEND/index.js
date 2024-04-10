const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();


//CORS
app.use(cors());

//servir html
app.use(express.static('public'));

//lectura y parseo de body
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Respondío del backend'
    });
})


//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log("servidor"+process.env.PORT);
});

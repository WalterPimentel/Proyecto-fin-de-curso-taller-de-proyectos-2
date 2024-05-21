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

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Respondío del backend'
    });
})


//escuchar peticiones
app.listen(PORT, () => {
    console.log("servidor en el puerto" + PORT);
});

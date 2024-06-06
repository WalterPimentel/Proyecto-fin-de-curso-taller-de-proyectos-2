import express from 'express';
import cors from 'cors';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';

import {Paciente} from './models/OdontogramaGeomorfico.js';

dotenv.config();

const app = express();
conectarDB()

//CORS
app.use(cors());

//servir html
app.use(express.static('public'));

//lectura y parseo de body
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Respondío del backend'
    });
})


app.post('/pacientes', async (req, res) => {
    try {
        const nuevoPaciente = new Paciente(req.body);
        await nuevoPaciente.save();
        res.status(201).json({ mensaje: 'Paciente creado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/pacientes', async (req, res) => {
    try {
      const pacientes = await Paciente.find();
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los pacientes' });
    }
  });

//escuchar peticiones
app.listen(PORT, () => {
    console.log("servidor en el puerto" + PORT);
});

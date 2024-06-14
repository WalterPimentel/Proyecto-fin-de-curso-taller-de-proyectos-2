import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const createAndSavePDF = require('./helpers/descargarPdf.cjs');

import express from 'express';
import cors from 'cors';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import transporter from './helpers/enviarMail.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { Paciente } from './models/OdontogramaGeomorfico.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
conectarDB();

// CORS
app.use(cors());

// Servir HTML
app.use(express.static('public'));

// Lectura y parseo de body
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Respondío del backend'
    });
});

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

app.post('/enviar-mail', async (req, res) => {
    const { nombre, correo, telefono } = req.body;

    try {
        const dataPaciente = await Paciente.findOne({ nombres: nombre });

        if (!dataPaciente) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }

        const { dni } = dataPaciente;
        const pdfFileName = `${nombre}-${dni}.pdf`;
        const pdfPath = path.resolve(__dirname, 'helpers', 'documents', pdfFileName);

        await createAndSavePDF(pdfPath, dataPaciente);

        const mailOptions = {
            from: 'correo@example.com',
            to: 'correo@example.com',
            subject: 'Asunto del correo',
            html: `
                <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f4f4f4;
                                color: #333;
                            }
                            .container {
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                background-color: #fff;
                                border-radius: 10px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Hola, ${nombre}</h1>
                            <p>Este es un correo electrónico de ejemplo con HTML bonito.</p>
                            <p>Puedes personalizar este HTML como desees.</p>
                        </div>
                    </body>
                </html>
            `,
            attachments: [
                {
                    filename: pdfFileName,
                    path: pdfPath
                }
            ]
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Error al enviar el correo:', error);
                res.status(500).json({ error: 'Error al enviar el correo' });
            } else {
                console.log('Correo enviado:', info.response);
                res.status(200).json({ mensaje: 'Correo enviado exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error en el proceso de enviar correo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.post('/buscar-paciente', async (req, res) => {
    const { nombre } = req.body;

    try {
        const paciente = await Paciente.findOne({ nombres: nombre });

        if (!paciente) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }

        res.json({ paciente });
    } catch (error) {
        console.error('Error al buscar paciente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Escuchar peticiones
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});

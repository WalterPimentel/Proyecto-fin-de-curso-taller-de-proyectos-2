// models/paciente.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const OdontogramaSchema = new Schema({
    edadCategoria: String,
    especificaciones: String,
    fecha: String,
    observaciones: String,
    odontograma: {
        type: Map,
        of: {
            type: Object,
            of: [String]
        }
    }
});


const OperadorSchema = new Schema({
    email: String,
    fullname: String,
    role: String
});

const PacienteSchema = new Schema({
    dni: String,
    nombres: String,
    apellidos: String,
    edad: Number,
    fechaRegistro: String,
    odontogramas: [OdontogramaSchema],
    operador: OperadorSchema,
    tipoOdontograma: String
});

const Paciente = model('Paciente', PacienteSchema);
const Odontograma = model('Odontograma', OdontogramaSchema);
const Operador = model('Operador', OperadorSchema);

export { Paciente, Odontograma, Operador };

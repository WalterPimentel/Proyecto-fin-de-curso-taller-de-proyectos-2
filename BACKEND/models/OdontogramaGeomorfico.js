import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const OdontogramaSchema = new Schema({
    edadCategoria: String,
    especificaciones: String,
    fecha: String,
    observaciones: String,
    tipoOdontograma: String,
    odontograma: {
        type: Map,
        of: {
            type: Object,
            of: [String]
        }
    },
    operador: {
        codigo: String,
        nombre: String,
        apellido: String,
        email: String,
        telefono: String,
    }
});

const PacienteSchema = new Schema({
    dni: String,
    nombres: String,
    apellidoP: String,
    apellidoM: String,
    fechanac: Date,
    fechaNac: String,
    fechaRegistro: String,
    sexo: String,
    lugar: String,
    domicilio: String,
    estadoCivil: String,
    telefono: String,
    email: String,
    ocupacion: String,
    responsable: String,
    domicilioResponsable: String,
    telefonoResponsable: String,
    motivoConsulta: String,
    odontogramas: [OdontogramaSchema],
});

const Paciente = model('Paciente', PacienteSchema);
const Odontograma = model('Odontograma', OdontogramaSchema);

export { Paciente, Odontograma };

const faker = require('faker');
const fs = require('fs');

let generatedDnis = new Set();

function generateUniqueDni() {
    let dni;
    do {
        dni = faker.datatype.number({ min: 10000000, max: 99999999 });
    } while (generatedDnis.has(dni));
    generatedDnis.add(dni);
    return dni.toString();
}

function generateUsuario() {
    return {
        id: faker.datatype.uuid(),
        codigo: generateUniqueDni(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        estado: faker.datatype.boolean({ probability: 0.8 }),
        rol: faker.random.arrayElement(['Estudiante', 'Docente']),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        phone: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
        genero: faker.random.arrayElement(['Masculino', 'Femenino']),
        foto: faker.image.avatar(),
        firmadigital: faker.image.imageUrl(),
        colegiatura: faker.datatype.number({ min: 1000, max: 9999 }).toString()
    };
}

function generatePaciente() {
    return {
        id: faker.datatype.uuid(),
        FechaCreacion: faker.date.past().toISOString(),
        HoraCreacion: faker.date.recent().toISOString(),
        dni: generateUniqueDni(),
        Nombre: faker.name.firstName(),
        ApellidoPaterno: faker.name.lastName(),
        ApellidoMaterno: faker.name.lastName(),
        Sexo: faker.random.arrayElement(['Masculino', 'Femenino']),
        Lugar: faker.address.city(),
        Domicilio: faker.address.streetAddress(),
        FechaNacimiento: faker.date.between('1950-01-01', '2018-12-31'),
        EstadoCivil: faker.random.arrayElement(['Soltero', 'Casado', 'Divorciado']),
        NroCelular: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
        Correo: faker.internet.email(),
        Ocupacion: faker.name.jobTitle(),
        Responsable: faker.name.findName(),
        DomicilioResponsable: faker.address.streetAddress(),
        CelularResponsable: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
        MotivoConsulta: faker.lorem.sentence()
    };
}

function generateData() {
    const user = Array.from({ length: 15 }, () => generateUsuario());
    const cita = Array.from({ length: 1000 }, (_, index) => {
        const odontologo = faker.random.arrayElement(user);
        const paciente = generatePaciente();
        return {
            id: index + 1,
            fecha: faker.date.future().toISOString(),
            hora: faker.date.recent().toISOString(),
            odontologo: `${odontologo.nombre} ${odontologo.apellido}`,
            motivo: faker.lorem.sentence(),
            sede: faker.address.city(),
            extras: faker.lorem.words(5),
            paciente,
            usuario: odontologo
        };
    });

    return { cita };
}

const data = generateData();

fs.writeFileSync('dbFaker.json', JSON.stringify(data, null, 2));

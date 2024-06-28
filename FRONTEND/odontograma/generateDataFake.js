const faker = require('faker');
const { format, differenceInYears } = require('date-fns');
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

function generateEstudianteOrDocente() {
    return {
        id: faker.datatype.number(),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        codigo: generateUniqueDni(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
        genero: faker.random.arrayElement(['Masculino', 'Femenino']),
        foto: faker.image.avatar(),
        firmadigital: faker.image.imageUrl()
    };
}

function generateRolEntity() {
    return {
        id: faker.datatype.number(),
        nombre: faker.random.arrayElement(['Administrador', 'Usuario', 'Invitado']),
        descripcion: faker.lorem.sentence(),
        user: faker.internet.userName()
    };
}

function generateData() {
    const data = {
        historiaClinica: [],
        usuario: []
    };

    for (let i = 1; i <= 985; i++) {

        const fechaNacimiento = faker.date.between('1950-01-01', '2018-12-31');
        const fecha = faker.date.past();
        const hora = faker.date.recent();

        data.historiaClinica.push({
            id: i.toString(),
            fechaRegistro: format(fecha, 'dd/MM/yyyy'),
            horaRegistro: format(hora, 'HH:mm'),
            dni: generateUniqueDni(),
            apellidos: faker.name.lastName(),
            nombres: faker.name.firstName(),
            fechaNacimiento: format(fechaNacimiento, 'dd/MM/yyyy'),
            edad: differenceInYears(new Date(), fechaNacimiento),
            sexo: faker.random.arrayElement(['Masculino', 'Femenino']),
            telefono: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
            peso: faker.datatype.number({ min: 40, max: 100 }),
            talla: faker.datatype.number({ min: 150, max: 200 }),
            presionArterial: faker.datatype.number({ min: 80, max: 120 }) + '/' + faker.datatype.number({ min: 60, max: 80 }),
            pulso: faker.datatype.number({ min: 60, max: 100 }),
            temperatura: faker.datatype.number({ min: 36.5, max: 37.3, precision: 0.1 }),
            email: faker.internet.email(),
            direccion: faker.address.streetAddress()
        });
    }

    for (i = 1; i <= 15; i++) {
        data.usuario.push({
            id: i.toString(),
            codigo: generateUniqueDni(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            estado: faker.random.arrayElement(['Activo', 'Inactivo']),
            rol: faker.random.arrayElement(['Estudiante', 'Docente']),
            estudiante: generateEstudianteOrDocente(),
            docente: generateEstudianteOrDocente(),
            rolEntity: generateRolEntity()
        });
    }

    return data;
}

const data = generateData();

fs.writeFileSync('dbFaker.json', JSON.stringify(data, null, 2));

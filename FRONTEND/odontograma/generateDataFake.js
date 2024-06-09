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

function generateData() {
    const data = {
        historiaClinica: [],
        userAuth: []
    };

    for (let i = 1; i <= 100; i++) {

        const fechaNacimiento = faker.date.between('1950-01-01', '2018-12-31');
        const fecha = faker.date.past();
        const hora = faker.date.recent();

        data.historiaClinica.push({
            id: i,
            fechaRegistro: format(fecha, 'dd/MM/yyyy'),
            hora: format(hora, 'HH:mm'),
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
            temperatura: faker.datatype.number({ min: 36, max: 39, precision: 0.1 }),
            email: faker.internet.email(),
            direccion: faker.address.streetAddress()
        });
    }

    for (i = 1; i <= 15; i++) {
        data.userAuth.push({
            id: i,
            username: faker.internet.userName(),
            fullname: faker.name.lastName() + ' ' + faker.name.firstName(),
            role: faker.random.arrayElement(['Dr.', 'Aux.', 'Prac.']),
            email: faker.internet.email(),
            status: faker.random.arrayElement(['Active', 'Inactive']),
            telefono: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
            direccion: faker.address.streetAddress()
        });
    }

    return data;
}

const data = generateData();

fs.writeFileSync('dbFaker.json', JSON.stringify(data, null, 2));

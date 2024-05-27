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
        historiaClinica: []
    };

    for (let i = 1; i <= 100; i++) {

        const fechaNacimiento = faker.date.between('1950-01-01', '2018-12-31');
        const fecha = faker.date.past();
        const hora = faker.date.recent();

        data.historiaClinica.push({
            id: i,
            fecha: format(fecha, 'dd/MM/yyyy'),
            hora: format(hora, 'HH:mm'),
            dni: generateUniqueDni(),
            apellidos: faker.name.lastName(),
            nombres: faker.name.firstName(),
            fechaNacimiento: format(fechaNacimiento, 'dd/MM/yyyy'),
            edad: differenceInYears(new Date(), fechaNacimiento),
            sexo: faker.random.arrayElement(['Masculino', 'Femenino']),
            telefono: '9' + faker.datatype.number({ min: 10000000, max: 99999999 }),
            peso: faker.random.number({ min: 40, max: 100 }),
            talla: faker.random.number({ min: 150, max: 200 }),
            presionArterial: faker.random.number({ min: 80, max: 120 }) + '/' + faker.random.number({ min: 60, max: 80 }),
            pulso: faker.random.number({ min: 60, max: 100 }),
            temperatura: faker.random.number({ min: 36, max: 39, precision: 0.1 })
        });
    }

    return data;
}

const data = generateData();

fs.writeFileSync('dbFaker.json', JSON.stringify(data, null, 2));

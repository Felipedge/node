const { leerDatos, registrarDatos } = require("./operaciones");

const [, , nombre, edad, tipo, color, enfermedad] = process.argv;
if (nombre && edad && tipo && color && enfermedad) {
    registrarDatos(nombre, edad, tipo, color, enfermedad);
} else {
    leerDatos();
}
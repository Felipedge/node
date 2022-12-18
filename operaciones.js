const fs = require("fs");

const leerDatos = () => {
    fs.readFile("citas.json", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    })
};


const registrarDatos = (nombre, edad, tipo, color, enfermedad) => {
    const data = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad,
    };
    const dataJSON = JSON.stringify(data);
    fs.writeFileSync("citas.json", dataJSON);
};

module.exports = {
    registrarDatos,
    leerDatos,
};
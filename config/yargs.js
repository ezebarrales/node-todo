const argv = require('yargs')
    .command("crear", "Crear una tarea pendiente a realizar", {
        description: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea a realizar",
        },
    })
    .command("actualizar", "Actualiza el estado de una tarea", {
        description: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea",
        },
        complete: {
            alias: "c",
            default: true,
            desc: "true si está completada, false si no está completada"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
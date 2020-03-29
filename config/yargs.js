const crear = {
    descripcion: {
        alias: "d",
        demand: true,
        describe: 'Descripcion de la tarea'
    }
}
const actualizar = Object.assign({
    completado: {
        alias: "c",
        default: true,
        describe: 'Estado de la tarea (true|false)'
    }
}, crear)

const argv = require('yargs')
    .command("crear", "Crear un elemento", crear)
    .command("actualizar", "Actualizar el estado de una tarea", actualizar)
    .command("borrar", "Borrar una tarea", crear)
    .help()
    .argv

module.exports = {
    argv
}
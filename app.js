const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./todo/todo');

let { _:command } = argv;

console.log(argv);

switch(command[0]) {

    case "crear":
        todo.crear(argv.description);
        break;

    case "listar":
        let todoList = todo.listar();
        console.log("===========================".yellow);
        console.log("     TAREAS PENDIENTES     ".yellow);
        console.log("===========================".yellow);

        for(let task of todoList) {

            console.log(`${ '-'.grey } ${ task.description } ${ '   |   Estado: '.gray } ${ task.completed }`);

        }

        break;
    
    case "actualizar":
        
        todo.actualizar(argv.description, argv.completed);

        break;

    default:
        console.log(`${ '[ERROR]'.red } El comando no es reconocido.`);

}
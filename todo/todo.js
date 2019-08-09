const fs = require("fs");
const colors = require("colors");

let todoList = [];

const guardarDb = () => {

    let data = JSON.stringify(todoList);

    return new Promise((resolve, reject) => {

        fs.writeFile('./db/data.json', data, (err) => {
            if(err)
                return reject(`${ "[ERROR]".red } No se pudieron guardar los datos`);
            else
                return resolve(`${ "[SUCCESS]".green } tarea creada satisfactoriamente`);
        });

    });

}

const cargarDB = () => {

    try {
        todoList = require("./../db/data.json");
    }
    catch (err) {
        todoList = [];
    }

};

const crear = description => {

    let task = {
        description,
        completed: false
    }

    cargarDB();
    todoList.push(task);

    guardarDb()
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

    return task;

};

const listar = () => {
    
    cargarDB();
    return todoList;

};

const actualizar = (description, completed = true) => {

    cargarDB();

    let index = todoList.findIndex(task => (
        task.description === description
    ));

    if(index >= 0) {
        todoList[index].completed = completed;
        guardarDb();
        return true;
    }
    else {
        return false;
    }

};

module.exports = {
    crear,
    listar,
    actualizar
}
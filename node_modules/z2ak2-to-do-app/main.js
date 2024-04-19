#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let toDos = [];
let condition = true;
console.log(chalk.green(`\t Welcome to Todo list`));
while (condition) {
    let toDo = await inquirer.prompt([
        {
            name: "select",
            message: chalk.green("select an a option"),
            type: "list",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        }
    ]);
    if (toDo.select === "Add") {
        let addTodo = await inquirer.prompt([{
                name: "todo1",
                type: "input",
                message: "Add Items In The List",
                validate: function (input) {
                    if (input.trim() == "") {
                        return "please enter a non empty number.";
                    }
                    return true;
                }
            }]);
        if (addTodo.todo1.trim() !== "") {
            toDos.push(addTodo.todo1);
            console.log(toDos);
        }
    }
    if (toDo.select === "Update") {
        let UpdateTodo = await inquirer.prompt({
            name: "todo1",
            type: "list",
            message: "what do you want to update in your list?",
            choices: toDos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            name: "todo1",
            type: "input",
            message: "Add Items In The List"
        });
        let newtodos = toDos.filter(val => val !== UpdateTodo.todo1);
        toDos = [...newtodos, addTodo.todo1];
        console.log(toDos);
    }
    if (toDo.select === "View") {
        console.log("....To Do List....");
        console.log(toDos);
    }
    if (toDo.select === "Delete") {
        let deleteTodo = await inquirer.prompt({
            name: "todo1",
            type: "list",
            message: "what do you want to delete in your list?",
            choices: toDos.map(item => item)
        });
        let newtodos = toDos.filter(val => val !== deleteTodo.todo1);
        toDos = [...newtodos];
        console.log(toDos);
    }
    if (toDo.select === "Exit") {
        console.log("Thankyou For Using To Do List");
        condition = false;
    }
    ;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countTask = exports.updateTask = exports.deleteTask = exports.getTask = exports.createTask = exports.getTasks = void 0;
const nanoid_1 = require("nanoid");
const db_1 = require("../db");
const getTasks = (req, res) => {
    const data = db_1.getConnection().get("tasks").value();
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = { name, description, id: nanoid_1.nanoid() };
    try {
        db_1.getConnection().get("tasks").push(newTask).write();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.createTask = createTask;
const getTask = (req, res) => {
    const taskFound = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound) {
        return res.status(500).send({ msg: "Task was not found..!" });
    }
    res.json(taskFound);
};
exports.getTask = getTask;
const deleteTask = (req, res) => {
    const taskFound = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound) {
        return res.status(500).send({ msg: "Task was not found..!" });
    }
    const deleteTask = db_1.getConnection()
        .get("tasks")
        .remove({ id: req.params.id })
        .write();
    return res.json(deleteTask[0]);
};
exports.deleteTask = deleteTask;
const updateTask = (req, res) => {
    const taskFound = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound) {
        return res.status(500).send({ msg: "Task was not found..!" });
    }
    const updatedTask = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .assign(req.body)
        .write();
    return res.json(updatedTask);
};
exports.updateTask = updateTask;
const countTask = (req, res) => {
    const count = db_1.getConnection().get("tasks").value().length;
    return res.json(count);
};
exports.countTask = countTask;

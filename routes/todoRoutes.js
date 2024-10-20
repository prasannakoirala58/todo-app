const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Routes for handling CRUD
router.get('/', todoController.getTodos);
router.post('/add', todoController.addTodo);
router.put('/update/:id', todoController.updateTodo);
router.put('/done/:id', todoController.markAsDone);
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;

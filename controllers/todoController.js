const { validationResult } = require('express-validator');
const Todo = require('../models/Todo');

// List all todos (with filtering)
exports.getTodos = async (req, res) => {
  const { filter } = req.query;
  let todos;

  if (filter === 'done') {
    todos = await Todo.find({ isDone: true });
  } else if (filter === 'upcoming') {
    todos = await Todo.find({ isDone: false });
  } else {
    todos = await Todo.find();
  }

  res.render('index', { todos });
};

// Add a new Todo
exports.addTodo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('index', { errors: errors.array() });
  }

  const { name, description } = req.body;

  // Automatically set the date to the current date
  const todo = new Todo({
    name,
    description,
    date: Date.now(), // Automatically set the creation date
  });

  await todo.save();
  res.redirect('/');
};

// Mark a Todo as done
exports.markAsDone = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);

  todo.isDone = !todo.isDone; // Toggle the status
  await todo.save();

  res.json({ isDone: todo.isDone });
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted successfully' });
};

// Update an existing Todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { name, description },
      { new: true } // Returns the updated document
    );

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.sendStatus(200); // Send success status without sending back JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the todo' });
  }
};

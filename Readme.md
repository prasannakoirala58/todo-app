# Simple Todo App

This is a simple Todo app built using **Node.js**, **Express**, **MongoDB**, and **Mongoose** on the backend, with **EJS** templating on the frontend. It includes features like adding, updating, marking as done, and deleting todos.

## Features

- Add new todos with a name, description, and due date.
- Edit existing todos with updated details.
- Mark todos as done or undo them.
- Delete todos from the list.
- View done and upcoming todos with filtering.

## Tech Stack

- **Node.js** and **Express** for the backend.
- **MongoDB** and **Mongoose** for database.
- **EJS** for templating and frontend rendering.
- **Tailwind CSS** for styling.

## Requirements

- [Node.js](https://nodejs.org/en/download/) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/prasannakoirala58/todo-app.git
   cd todo-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your .env file with the following variables:

   ```bash
   MONGO_URI=mongodb://localhost:27017/todo-app
   PORT=5000
   ```

4. Run the app:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at http://localhost:<PORT>

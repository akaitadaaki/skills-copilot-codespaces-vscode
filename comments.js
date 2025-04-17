// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data for members and skills
let members = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

let skills = [
  { id: 1, name: 'JavaScript', description: 'A versatile programming language commonly used for web development.', experience: '3 years' },
  { id: 2, name: 'Python', description: 'A high-level programming language known for its readability and versatility.', experience: '2 years' },
];

// Route to get all members
app.get('/members', (req, res) => {
  res.json(members);
});
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// Middleware to parse incoming request bodies
// We use the body-parser middleware FIRST so that
// we have access to the parsed data within our routes.
// The parsed data will be located in "req.body".
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route with route parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.render('user', { userId });
});

// Render different views
app.get('/view1', (req, res) => {
  res.render('view1', { title: 'View 1' });
});

app.get('/view2', (req, res) => {
  res.render('view2', { title: 'View 2' });
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  console.log('Form data:', req.body);
  res.send('Success!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

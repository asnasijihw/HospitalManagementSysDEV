const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/api/user', (req, res) => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    res.json(items);
  });
  

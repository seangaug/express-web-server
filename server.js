const express = require('express');
const app = express();
const port = 3000;

// Serve the static content of the public directory using express.static middleware
app.use(express.static('public'));

// Make sure you connect your server file to port 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
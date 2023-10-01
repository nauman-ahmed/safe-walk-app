const express = require('express');
const app = express();
const port = 3000; // Choose a port number

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
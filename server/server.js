const http = require('http');
const cors = require('cors');
const express = require('express');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

// Handle CORS Behaviour.
app.use(cors(
  {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
      credentials: true
  }
));

// Parse JSON Data.
app.use(express.json());

// Handle Requests.
app.use(router);

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

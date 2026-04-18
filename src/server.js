//require('dotenv').config() // Load environment variables from .env file

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;



app.use(express.json()) // Middleware to parse JSON bodies

// app.post('/echo', (req, res) => {
//     res.json({ echoed: req.body });
// });
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World! from Ajetunmobi Qudus');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Hello User ${userId}! from Qudus`);
});
app.get('/search', (req, res) => {
    const id = req.query.id;
    res.send(`You searched for ${id}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require("cors")

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT"],
    credentials: true
  })
)

const PORT = 3000;

app.use(morgan('dev'));

app.put("/data", (req, res) => {
  res.json({ name: "Dima", age: 31})
})

app.listen(PORT, () => {
  console.log('Server is working on PORT:', PORT);
})

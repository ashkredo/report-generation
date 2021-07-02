const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('post 3000'))
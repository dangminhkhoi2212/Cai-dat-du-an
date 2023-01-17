const express = require('express');
const cors = require('cors');
const contactsRouter = require('./app/routers/contact.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

module.exports = app;

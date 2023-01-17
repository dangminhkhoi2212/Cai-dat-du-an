const express = require('express');
const cors = require('cors');
const contactsRouter = require('./app/routers/contact.router');
const ApiError = require('./app/api-error');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

// handle 404 response
app.use((rep, res, next) => {
    return next(new ApiError(404, 'Resource not found'));
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message || 'Internal Sever Error',
    });
});
module.exports = app;

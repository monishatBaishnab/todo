const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const applyMiddleware = (app) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
}

const pathErrorHandler = (req, res, next) => {
    const error = new Error(`${req.originalUrl} not found.`);
    error.status = 404;
    next(error);
};

const globalErrorHandler = (err, req, res, next) => {
    if (err.message) {
        res.status(500).send(`Internal server error: ${err.message}`);
    } else {
        res.status(500).send('Internal server error. An unexpected error occurred.');
    }
};

module.exports = {applyMiddleware, pathErrorHandler, globalErrorHandler};
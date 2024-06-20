"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: "Hello world",
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

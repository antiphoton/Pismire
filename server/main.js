'use strict';

const path = require('path');

const express = require('express');

const getArg = require('../lib/argv')(__dirname);

const app = express();
const port = getArg('port');
const rootPath=process.cwd();
const pugEnabled = getArg('pug');
if (pugEnabled) {
    app.set('view engine', 'pug');
    app.get(/\/$/, function (req, res, next) {
        res.render(path.join(rootPath, req.path, 'index.pug'), function (err, html) {
            if (err) {
                console.error(err);
                next();
            }
            else {
                res.send(html);
            }
        });
    });
}
app.use(express.static(rootPath));
app.listen(port);


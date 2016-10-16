'use strict';

const express=require('express');

const getArg=require('../lib/argv')(__dirname);

const app=express();
const port=getArg('port');
app.use(express.static(process.cwd()));
app.listen(port);


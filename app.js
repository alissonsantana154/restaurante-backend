const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.write('Hello ');
    res.end();
});

app.listen(3000)
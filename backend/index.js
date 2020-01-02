const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '../assets')));
var server = app.listen(80, function(){
	console.log('listening on port 80');
}).on('error',(err)=>{console.error(err);});
const express = require('express');

const app = express();

 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/views/index.html");
 });

app.listen(3000, () => console.log('Example app is listening on port 3000.'));

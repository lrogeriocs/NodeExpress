const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

//all is a method that recives 2 arguments
// 1 - route
// 2 - callback
app.all('/', (req, res)=>{
    //Express handle the basic headers ( {content-types})
    //Exprss also handles the connection status
   
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, ()=>{
    console.log('Listen door 3000');
})
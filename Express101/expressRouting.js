const express = require('express');
const app = express();

app.listen(3000, ()=>console.log('Listening port 3000'));

// app object has some methods
// HTTP verbs
// 1- get
// 2- post 
// 3- put
// 4 -delete

//all those methods take 2 args
// 1 path
// 2 callback

app.get('/', (req, res)=>{
  res.send('<h1>GET EXPRESS</h1>')
});

app.post('/', (req, res)=>{
    res.send('<h1>POST EXPRESS</h1>')
});

app.delete('/', (req, res)=>{

});

app.put('/', (req, res)=>{

});
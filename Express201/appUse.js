const express = require('express');
const app = express();

// Express is 2 things 
// 1 - Router
// 2-  Midleware that comprises a webframwork

// Midleware : Is a whole bunch of little functions that acts between the request and response

// Ex:  Request ---- Midleware ------ Response
// 1 - Request comes in
// 2 - We need to validate the user, sometimes
// 3 - we need store things on the DB
// 4 - If theres any data from the user we need parse it
// 4 - Response

function validateUser (req, res, next){
    //get info out of the req obj
    //do some stuff with the DB
    res.locals.validated = true;
    console.log("VALIDATE RAN");
    next();
}

//this will run validate user just for the /Admin
// app.use("/Admin", validateUser);


//This will run validateUSer for all / local
app.use(validateUser);

//This will run validateUSer for all / that is a get.
app.get("/", validateUser);


app.get('/', (req, res, next)=>{
  res.send('<h1>Main Page</h1>');
  console.log(res.locals.validated);
})


app.get('/admin', (req, res, next)=>{
    res.send('<h1>Admin Page</h1>');
    console.log(res.locals.validated);
  })
app.listen(3000, ()=>console.log('Listing port 3000'));


const express = require('express');
const app = express();
const Rutebibit = require('./routes/todo.js');
const port = 3000;

app.use('/bibit', Rutebibit);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, ()=>
    console.log(
        `Server berjalan di port : http://localhost:${port}`)
    
);
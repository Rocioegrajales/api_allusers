const express = require('express');
const cors = require('cors');
const {sequelize} = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');

require ("dotenv").config()

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => { 
    console.log('enviando archivo index.html');
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.DB_PORT;

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`)       
    try{
        await sequelize.sync();
        console.log('Database connected')
    }catch(err){
        console.error('Error base de datos', err)
    }
})

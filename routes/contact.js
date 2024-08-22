const express = require('express');
const router = express.Router();
const Contact = require ('../models/Contact');

router.post('/send', async(req, res) => {
    const {name, lastname, email, birthday} = req.body;    

    try{
        const cnew = await Contact.create({
        name,
        lastname,
        email,
        birthday      
        })       
        console.log(cnew)
    }catch (err){
        console.error(err.message);
        res.status(500).send('Error al enviar respuetas')
    }
});

module.exports = router;
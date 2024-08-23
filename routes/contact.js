const express = require('express')
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/send', async (req, res) => {
    const { name, lastname, email, birthday } = req.body;
    try {
        const newContact = await Contact.create({
            name,
            lastname,
            email,
            birthday
        });
        res.status(200).json(newContact);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al enviar respuesta' });
    }
});

module.exports = router;
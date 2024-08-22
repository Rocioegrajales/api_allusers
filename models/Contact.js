const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false      
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }       
},

{
    timestamps: false    
});

module.exports = Contact;
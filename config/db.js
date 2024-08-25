const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('userauth', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

const connectDB = async() => {
    try {
        await sequelize.authenticate()
        console.log('Connected to database')
    } catch(err){
        console.error('Error connecting to database', err);
    }
}

module.exports = {sequelize, connectDB}

// De la clase, agosto 9
// mysql://root:vyRmfsvQRjhkYUknzwkLskVBgTsjrYub@autorack.proxy.rlwy.net:21701/railway

// Agosto 19 
// mysql://root:vyRmfsvQRjhkYUknzwkLskVBgTsjrYub@autorack.proxy.rlwy.net:21701/railway

// 12:12 am
// mysql://root:vyRmfsvQRjhkYUknzwkLskVBgTsjrYub@autorack.proxy.rlwy.net:21701/railway

//Agosto 20
// mysql://root:vyRmfsvQRjhkYUknzwkLskVBgTsjrYub@autorack.proxy.rlwy.net:21701/railway

// Agosto 24
// mysql://root:YOWPxPuVIWQdIXVQDjtrwvmwvKZuSBwW@autorack.proxy.rlwy.net:26608/railway
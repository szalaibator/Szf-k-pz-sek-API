const express = require('express')
const trainings = require('./routes/trainings')
const morgan = require('morgan')

require('dotenv').config() // A .env fájlt olvassa
const app = express()

const logger = (req, res, next) => {
        req.hello = 'Hello World!'
        console.log('Middleware ran.');
        next()
    }
     app.use(morgan('dev'))

app.use('/api/trainings', trainings)

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));
    

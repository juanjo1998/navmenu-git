const express = require('express')
const hbs = require('hbs')
const port = 8080

// express app
const app = express()

// hbs
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
// linea 1
const express = require('express')
const hbs = require('hbs')
const port = 8080

// express app
const app = express()

// hbs
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials")

// ? static content
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

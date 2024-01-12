const express = require('express')
const app = express()
const morgan = require('morgan')

const port = 3000

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('hello from express-boilerplate')
})

app.listen(port, () => {
    console.log(`listening app on http://localhost:${port}`);
})
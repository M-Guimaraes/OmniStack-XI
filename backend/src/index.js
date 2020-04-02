const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors(
    // origin:'http://meu.app.com' serve para que o front acesse o back
))
app.use(express.json())
app.use(routes)

app.listen(3333)
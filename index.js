const express = require('express')
const app = express()

app.use('/opa', (req, res) => {
    res.send('Estou bem!! Caramelo Surf')
})

app.listen(3000, () => {
    console.log('Backend executando...2')
})
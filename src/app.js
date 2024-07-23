import express from 'express'
import displayRoutes from 'express-routemap'

const PORT = 8080
const app = express()

app.listen(PORT, () =>{
    displayRoutes(app)
    console.log(`Servidor Express en puerto ${PORT} ONLINE`)
})

app.get('/', (req, res) => {
    res.send('bienvenidos')
})

app.get('*', (req, res) => {
    res.status(400)
    res.send('ESTA RUTA NO ESTA DEFINIDA !')
})

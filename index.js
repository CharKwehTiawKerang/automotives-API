//======================== ANOTHER WAY ========================//
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
// const PORT = process.env.PORT || 8000

// server.use(middlewares)
// server.use(router)

// server.listen(PORT)

const PORT = process.env.PORT || 8000
const express = require('express')

const app = express()

const perodua = require('./car-brand/perodua').perodua
const honda = require('./car-brand/honda').honda


app.get('/', (req, res) => {
    res.json('Automotive Parts API *notes pls double check your owner manual details car correctly and also if you found any incorrect information do send me an email. I appreciate it, Thank you :D')
})

app.get('/products', (req, res) => {
    res.json('By Product')
})

app.get('/brands', (req, res) => {
    // res.json('All car brands')
    res.json(honda)
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
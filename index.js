const express = require("express")

const { Contenedor } = require("./Contenedor")
console.log({Contenedor})

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log("asd")
})

const data = new Contenedor("productos.txt")

app.get("/productos", async (req, res) => {
    res.send(await data.getAll())
})


app.get("/productoRandom", async (req, res) => {
    res.send(await data.getRandom())
})
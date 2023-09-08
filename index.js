const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors())

let veterinarios = []
let mascotas = []
let usuarios = []

app.post('/veterinarios',(req,res)=>{
    let newVeterinario = {
        name: req.body.name,
        last: req.body.last,
        id: req.body.id
    }

    veterinarios.push(newVeterinario)
    res.send("Creacion satisfactoria")
})

app.patch('/veterinarios/:id', (req,res)=>{
    let index = veterinarios.findIndex(veterinario => veterinario.id == req.params.id)

    veterinarios[index].name = req.body.name || veterinarios[index].name
    veterinarios[index].last = req.body.last || veterinarios[index].last

    res.send("Actualizacion satisfactoria")
})

app.get('/veterinarios',(req,res)=>{
    res.send({"Veterinarios":veterinarios})
})

app.delete('/veterinarios/:id',(req,res)=>{
    let index = veterinarios.findIndex(veterinario => veterinario.id == req.params.id)
    let vetDelete = veterinarios.splice(index, 1)

    res.send("Eliminacion satisfactoria")
})

app.post('/usuarios',(req,res)=>{
    let newUsuario = {
        name: req.body.name,
        last: req.body.last,
        id: req.body.id
    }

    usuarios.push(newUsuario)
    res.send("Creacion satisfactoria")
})

app.patch('/usuarios/:id', (req,res)=>{
    let index = usuarios.findIndex(usuario => usuario.id == req.params.id)

    usuarios[index].name = req.body.name || usuarios[index].name
    usuarios[index].last = req.body.last || usuarios[index].last

    res.send("Actualizacion satisfactoria")
})

app.get('/usuarios',(req,res)=>{
    res.send({"Usuarios":usuarios})
})

app.delete('/usuarios/:id',(req,res)=>{
    let index = usuarios.findIndex(usuario => usuario.id == req.params.id)
    let vetDelete = usuarios.splice(index, 1) 

    res.send("Eliminacion satisfactoria")
})

app.post('/mascotas',(req,res)=>{
    let newMascota = {
        name: req.body.name,
        age: req.body.age,
        id: req.body.id,
        type: req.body.type,
        username: '',
        vet:'',
    }

    mascotas.push(newMascota)
    res.send("Creacion satisfactoria")
})

app.patch('/mascotas/:id', (req,res)=>{
    let index = mascotas.findIndex(mascota => mascota.id == req.params.id)

    mascotas[index].name = req.body.name || mascotas[index].name
    mascotas[index].age = req.body.age || mascotas[index].age
    mascotas[index].username = req.body.username || mascotas[index].username
    mascotas[index].vet = req.body.vet || mascotas[index].vet

    res.send("Actualizacion satisfactoria")
})

app.get('/mascotas',(req,res)=>{
    res.send({"Mascotas":mascotas})
})

app.delete('/mascotas/:id',(req,res)=>{
    let index = mascotas.findIndex(mascota => mascota.id == req.params.id)
    let vetDelete = mascotas.splice(index, 1) 

    res.send("Eliminacion satisfactoria")
})

app.get('/', (req, res) => {    
    res.send('Server started')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
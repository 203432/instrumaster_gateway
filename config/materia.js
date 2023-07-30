import express from "express"
let app = express()

app.get("/materia", (req,res,next) => {
    res.send([
    "Inteligencia Artificial",
    "Programacion movil",
    ])
})
    app.listen(3000, () =>{
        console.log(">API de materias")
    })

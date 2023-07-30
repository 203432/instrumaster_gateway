import express from "express"
let app = express()

app.get("/alumno", (req,res,next) => {
    res.send([
    "JAime",
    "MAuricio",
    "Ana"
    ])
})
    app.listen(3001, () =>{
        console.log(">API de alumnos")
    })

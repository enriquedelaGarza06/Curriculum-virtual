const express=require("express")

const app=express()
const port=3000

console.log("ejecutando aplicacion")

app.get("/",(req,res)=>{
    res.sendFile("./index.html",{root: __dirname })
})

app.get("/sobre_mi",(req,res)=>{
    res.sendFile("./sobre_mi.html",{root: __dirname })
})

app.use((req,res,next)=>{
    res.status(404).sendFile("./status404.html",{root: __dirname })
})

app.listen(port, ()=>{
    console.log(`Aplicación corriendo ahora sí en el puerto ${port}`)
})
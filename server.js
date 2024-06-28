import Express from "express"
import Path from "path"
import {registrar_usuario, consultar_usuario} from './db.js'

const app = Express()
app.use(Express.static("frontend/build"))
app.use(Express.json())
app.use(Express.urlencoded({}))

const dir_root = Path.resolve()
app.listen('80', function(){
    console.log("Servidor iniciado")
})

app.get('/', function(req,res){
  res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get('/registrar', function(req,res){
    res.sendFile(dir_root + "/frontend/build/index.html")
  })

  app.get('/consultar', function(req,res){
    res.sendFile(dir_root + "/frontend/build/index.html")
  })

  app.get('/contact', function(req,res){
    res.sendFile(dir_root + "/frontend/build/index.html")
  })
  
  app.post("/register_user", (req, res) => {
   let {id, name, lastname} = req.body
   console.log(id + " " + name +" "+ lastname)
   registrar_usuario(id, name, lastname)
   res.redirect("/")
   })
   
   app.post("/consultar_usuario", (req, res) =>{
       let {id} = req.body
       console.log(id)
       consultar_usuario(id)
      
   })
import Mysql from 'mysql'

let connection = Mysql.createConnection({
    
    host:"database01.cr0cwei4837t.us-east-2.rds.amazonaws.com",
    database: "db_users",
    user: "admin",
    password: "TallerReact"
})

connection.connect(function(err){
    if (err){
        console.log(err)
    }
    else{
        console.log("Conectado a la base de datos")
    }
        
    })
      

export function registrar_usuario(id, name,lastname){
    let instruccion_sql = "INSERT INTO users (id, nombre, apellido) VALUES ("+id+", '"+name+"', '"+lastname+"')"
    connection.query(instruccion_sql, function(err, result){
        if (err){
           console.log("Error: " + err) 
        }
        else{
            console.log("Usuario Registrado ") 
        }
    })
    
}

export function consultar_usuario(id){
    let instruccion_sql = "SELECT * FROM users WHERE id = " + id
     connection.query(instruccion_sql, function(err, result){
        if (err){
           console.log("Error: " + err) 
        }
        else{
            console.log("Usuario consultado ") 
            console.log(result)
            return result
        }
    })
    
}
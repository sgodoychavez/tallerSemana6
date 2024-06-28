import img_consulta from "../images/consultar.png"

 function consultar_usuario(){
       let objeto_usuario = {
           "id": document.getElementById("id-user").value
       }
        
        fetch('/consultar_usuario', {
            "method":"post",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(objeto_usuario)
        })
        .then(data=>mostrarData(data))
        
        const mostrarData = (data) =>{
            
            console.log(data)
            document.getElementById("textarea").value = data
        }
  }

function Consultar(){
   
   
    return(
        <div>
            <h3>CONSULTA DE USUARIOS</h3>
            <br></br>
            <h3>Consulta de usuarios</h3>
            <br></br>
            <img className = "img-icon" src= {img_consulta}></img>
            <br></br>
            <label>ID</label> <input id="id-user"/> <br /> <br />
            <textarea id="textarea"></textarea> <br /> <br />
            <button onClick={consultar_usuario}>Consultar</button>  
        </div>
    )
}

export {Consultar}
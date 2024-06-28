import img_usuarios from "../images/usuarios.jpg"

function Home(){
    return(
        <div>
            <h1>SISTEMA DE REGISTRO DE USUARIOS</h1>
            <br></br>
            
            <img className = "img-home" src={img_usuarios}></img>
            
        </div>
    )
}

export {Home}
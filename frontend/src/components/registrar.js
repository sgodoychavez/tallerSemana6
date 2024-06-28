import img_registrar from "../images/Registrar2.jpg"
function Registrar(){
    return(
        <div>
            <h2>REGISTRAR USUARIOS</h2>
            <br/><br/>
            <img className = "img-icon" src={img_registrar}></img>
            <form action = '/register_user' method='post'>
                <label> Id</label> <input name="id"/> <br/><br/>
                <label> Nombre</label> <input name="name"/> <br/><br/>
                <label> Apellido</label> <input name="lastname" /> <br/><br/>
                
                <button>Registrar</button>
            </form>
        </div>

    )

}

export default Registrar
import Rec from 'react'

class Navegation extends Rec.Component {
    render(){

        function go_to_home(){
            window.location="/"
        }

        function go_to_registro(){
            window.location="/registrar"
        }

        function go_to_consultar(){
            window.location="/consultar"
        }

        function go_to_contact(){
            window.location="/contact"
        }

        return(
            
            <div className='block-navegation'>
                <li class='block-items'> 
                    <button id="btn-nav" onClick={go_to_home}>Home</button>
                </li>
                <li class='block-items'> 
                    <button id="btn-nav" onClick={go_to_registro}>Registrar</button>
                </li>
                <li class='block-items'> 
                    <button id="btn-nav" onClick={go_to_consultar}>Consultar</button>
                </li>
                <li class='block-items'> 
                    <button id="btn-nav" onClick={go_to_contact}>Contact</button>
                </li>
            </div>
        )
    }

}

export default Navegation
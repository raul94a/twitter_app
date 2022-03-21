import './CreateAccountSecondView.css'
import { useEffect, useState } from 'react';

let init = true;
let className = 'form-padding enter-page-animation'

const CreateAccountSecondView = ({shouldRenderRegister}) => {
    const [nextPage, shouldGoForward] = useState(null);
    //estado de control de animaciones
    const [cn, setcn] = useState('form-padding enter-page-animation')

    function clickHandler(e){
    
        e.preventDefault();
        //permito la accion de la animacion de salida
        shouldGoForward(true);
        setTimeout(()=>{
            //permito renderizar la siguiente pagina con su animacion (by default)
            shouldRenderRegister(true);
        },600)
        return;
    }

    useEffect(()=>{
       if(init){
           init = false;
       }
       //quitando la clase de enter page permito la animacion de next page
       setTimeout(()=>{
        let className = 'form-padding'
        setcn(className)
       },850)
    },[])

    return (
        <div className={`${cn} ${nextPage ? 'next-page-transition' : ''}`}>
            <h1>Personaliza tu experiencia</h1>
            <form autoComplete='off' className='create-account-form'>
                <div className='create-account-second-view-container'>
                    <h2>Conéctate con personas que conoces</h2>
                    <div className='checkbox-container'>
                        <span className='checkbox-container-span'>
                            Permite que otros usuarios encuentren tu cuenta de Twitter por tu número de teléfono.
                        </span>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className='create-account-second-view-container'>
                    <h2>Anuncios personalizados</h2>
                    <div className='checkbox-container'>
                        <span className='checkbox-container-span'>
                            Los anuncios que ves en Twitter siempre dependen de tu actividad en Twitter. Si activas esta configuración,
                            Twitter podrá personalizar mejor los anuncios de los anunciantes de Twitter, dentro y fuera de Twitter,
                            mediante la combinación de tu actividad en Twitter con otras actividades en línea y con la información que proporcionan nuestros socios.
                        </span>
                        <input type="checkbox"></input>
                    </div>
                </div>


                <button type="submit" 
                    className='button-active'
                    onClick={(e) => {clickHandler(e)}}>Siguiente</button>
            </form>
        </div>

    )
}
export default CreateAccountSecondView
import { useEffect, useState } from 'react'
import TwitterDateInput from '../../inputs/TwitterDateInput';
import TwitterInputEmail from '../../inputs/TwitterInputEmail';
import TwitterNameInput from '../../inputs/TwitterNameInput';

import './CreateAccountFirstView.css'
const CreateAccountFirstView = (props) => {
     
    //nextPage
    const [nextPage, shouldGoForward] = useState()
    //form state
    const {nameInput, setNameInput, emailInput, setEmailInput, dateInput, setDateInput, shouldRenderSecondView } = props;

    //¿Validamos la acción del botón?
    const [isButtonActive, changeButtonStatus] = useState(false)

   
   
    
    function clickHandler(event) {
        console.log('trigger handler')
        event.preventDefault();
        if (emailInput && nameInput && dateInput) {
            console.log('is valid')
            shouldGoForward(true)
            setTimeout(()=>{
                shouldRenderSecondView(true)

            },600)
            return;
        }
        console.log('not valid')
    }

    useEffect(() => {
        //debounce para evitar el refresco cada vez que cambien los input del formulario
        const timer = setTimeout(()=>{
            if (dateInput && nameInput && emailInput) {
                changeButtonStatus(true)
                console.log('event is acctive')
            }
            else if (isButtonActive) {
                changeButtonStatus(false)
            }
            console.log('activando use effect')
        },500)
        return  () => {
            clearTimeout(timer)
        }
    }, [dateInput, nameInput, emailInput,isButtonActive]);

    return (
        <div className={`form-padding ${nextPage ? 'next-page-transition' : ''}` }>
            <h1>Crea tu cuenta</h1>
            <form autoComplete='off' className='create-account-form'>
                <TwitterNameInput 
                    nameInput={nameInput} 
                    setNameInput={setNameInput} 
                />
                <TwitterInputEmail 
                    emailInput={emailInput}
                    setEmailInput={setEmailInput}
                />

                <div className='create-account-first-view-info'>
                    <h3>Fecha de nacimiento</h3>
                    <span>
                        Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.
                    </span>
                </div>

                {/* <label htmlFor='date'>
                    <input id="date"
                        type="date"
                        value={dateInput}
                        onChange={(e) => {
                            setDateInput(e.target.value)

                        }
                        }
                        placeholder='Selecciona tu fecha de nacimiento' />

                </label> */}
                <TwitterDateInput dateInput={dateInput} setDateInput={setDateInput}/>


                <button type="submit"disabled={!isButtonActive}
                 className={`${isButtonActive ? 'button-active' : 'button-disabled'}`} 
                 onClick={(e) => clickHandler(e)}>Siguiente</button>
            </form>
        </div>
    )
}
export default CreateAccountFirstView
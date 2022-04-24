import TwitterLogo from '../../../svg_logos/TwitterLogo'
import './CreateAccount.css'
import CreateAccountFirstView from './CreateAccountFirstView'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiControlActions } from '../../../../store'
import CreateAccountSecondView from './CreateAccountSecondView'
import CreateAccountRegister from './CreateAccountRegister'

const CreateAccount = (props) => {
    //form state
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('')
    //render state => mejorar con maps de componentes
    const [renderSecondView, shouldRenderSecondView] = useState(null)
    const [renderRegister, shouldRenderRegister] = useState(null)
    const formState = {
        nameInput: nameInput,
        setNameInput: setNameInput,
        emailInput: emailInput,
        setEmailInput: setEmailInput,
        dateInput: dateInput,
        setDateInput: setDateInput,
        shouldRenderSecondView: shouldRenderSecondView,
        shouldRenderRegister: shouldRenderRegister
    
    }
    const dispatch = useDispatch();
    function closeModal(){
        dispatch(uiControlActions.shouldCloseModal())
    }
    return (
        <>

            <header className="auth-header">
                <button onClick={closeModal}>X</button>
                <TwitterLogo className="auth-logo" />
            </header>
            {/* Mejorar renders con un mapa de componentes */}
            {!renderSecondView &&<CreateAccountFirstView {...formState} />}
            {renderSecondView && !renderRegister && <CreateAccountSecondView shouldRenderRegister={shouldRenderRegister}/>}
            {renderRegister && 
                <CreateAccountRegister 
                    {...formState} 
                    passwordInput={passwordInput} 
                    setPasswordInput={setPasswordInput}
                />
            }

        </>
    )
}
export default CreateAccount
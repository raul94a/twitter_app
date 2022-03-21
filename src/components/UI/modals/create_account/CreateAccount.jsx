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

            <header className="create-account-header">
                <button onClick={closeModal}>X</button>
                <TwitterLogo className="create-account-logo" />
            </header>
            {!renderSecondView &&<CreateAccountFirstView {...formState} />}
            {renderSecondView && !renderRegister && <CreateAccountSecondView shouldRenderRegister={shouldRenderRegister}/>}
            {renderRegister && <CreateAccountRegister {...formState}/>}

        </>
    )
}
export default CreateAccount
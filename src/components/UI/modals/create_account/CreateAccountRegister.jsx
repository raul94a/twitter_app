import TwitterInputEmail from '../../inputs/TwitterInputEmail'
import TwitterNameInput from '../../inputs/TwitterNameInput'
import TwitterDateInput from '../../inputs/TwitterDateInput'
import { signUpWithEmail } from '../../../../auth/firebase-auth'
import {authActions} from '../../../../store/index';
import './CreateAccountRegister.css'
// import { useStore } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import TwitterInputPassword from '../../inputs/TwitterInputPassword';
const CreateAccountRegister = (props) => {

    const { nameInput, setNameInput, emailInput, setEmailInput, dateInput, setDateInput, passwordInput, setPasswordInput} = props;
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const dispatch  = useDispatch();
    return (

        <div className={`form-padding enter-page-animation`}>
            <h1>Confirma tus datos</h1>
            <form autoComplete='off' className='create-account-form'>

                <div className='inputs-container'>

                    <TwitterNameInput
                        nameInput={nameInput}
                        setNameInput={setNameInput}
                        />
                    <TwitterInputEmail
                        emailInput={emailInput}
                        setEmailInput={setEmailInput}
                        error={error}
                    />
                    <TwitterDateInput dateInput={dateInput} setDateInput={setDateInput} />
                    <TwitterInputPassword passwordInput={passwordInput} setPasswordInput={setPasswordInput}/>
                </div>

                <button type="submit" disabled={loading}
                    className={`${true ? 'button-active' : 'button-disabled'}`}
                    onClick={async (e) => { 
                        setLoading(true)
                        e.preventDefault();
                        try{
                            let userData = await signUpWithEmail(emailInput, nameInput, passwordInput);
                            console.log(userData)
                            dispatch(authActions.setCredentials({...userData}));

                        }catch (err){
                            setError(true)
                            console.error(err, 'ha habido un error!');
                            setLoading(false)
                        }
                        //HECHO: userDatas contiene los dtos del usuario...habría que llamar al dispatch para triggear a redux

                        //HECHO: necesito pasar los datos del resto de states a este componentne

                        //HECHO: necesito desabilitar el boton de siguiente mientras los datos son enviados a la bd

                        //puedo utilizar un manejador de estado de UI para lanzar los circular Progress indicator
                        //e inhabilitar los botones que sean necesarios
                        
                        //cosas que puedo añadir es en el formuilario inicial comprobar asyncronamente si el email existe o no existe
                        //en el caso de que exista debe mostrarse un mensaje de error diciendo que no puede usarse, además de inhabilitarse el botón
                        //de siguiente.

                        //TODO: STATE DE ERROR DE RED!!!!!!

                        //los posibles erroes que aparezcan en la UI pueden ser controlados con redux
                    }}>{loading ? 'Cargando...' : 'Siguiente'}</button>
            </form>
        </div>


    )
}
export default CreateAccountRegister
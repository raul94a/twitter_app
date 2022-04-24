import './LoginWithEmail.css'
import { uiControlActions } from '../../../../store';
import { authActions } from '../../../../store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signInWithEmail, getUser } from '../../../../auth/firebase-auth';
import TwitterLogo from '../../../svg_logos/TwitterLogo';
import TwitterInputEmail from '../../inputs/TwitterInputEmail';
import TwitterInputPassword from '../../inputs/TwitterInputPassword';
const LoginWithEmail = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const dispatch = useDispatch();
    function closeModal() {
        dispatch(uiControlActions.closeLoginModal())
    }


    async function login(e) {
        e.preventDefault()
        let firebaseAuthData = await signInWithEmail(email, password).catch(() => {
            setError(true);
            return;
        })
        let userData = await getUser(firebaseAuthData.localId).catch(() => {
            setError(true)
        });
        if (error) {
            return;
        }
        userData.localId = firebaseAuthData.localId;
        userData.idToken = firebaseAuthData.idToken;
        console.log(userData)
        dispatch(authActions.setCredentials({ ...userData }))
    }
    return (
        <>
            <header className="auth-header">
                <button onClick={closeModal}>X</button>
                <TwitterLogo className="auth-logo" />
            </header>
            <div className={`form-padding`}>
                <h1>Introduce tus datos</h1>
                <form autoComplete='off' className='create-account-form'>

                    <div className='inputs-container-login'>
                        {/* MUY MUY IMPORTANTE... CREO QUE DEBO DE REDISEÑAR EL ERROR Y TRABAJR CON TIPOS EN VEZ DE BOOLEAN, ASÍ PUEDO MOSTRAR EL MENSAJE CORRECTO! */}
                        <TwitterInputEmail
                            emailInput={email}
                            setEmailInput={setEmail}
                            error={error}
                        />
                        <TwitterInputPassword passwordInput={password} setPasswordInput={setPassword} />
                        <p className='login-info'>
                            Introduce una cuenta de correo y una contraseña válida iniciar sesión. Si aún no 
                            dispones de una cuenta recuerda que puedes registrarte utilizando una cuenta
                            de Google o mediante el correo y la contraseña que desees.
                        </p>
                    </div>

                    <button type="submit" disabled={loading}
                        className={`${true ? 'button-active' : 'button-disabled'}`}
                        onClick={async (e) => { await login(e) }}>{loading ? 'Cargando...' : 'Siguiente'}</button>
                </form>
            </div>


        </>
    )
}
export default LoginWithEmail
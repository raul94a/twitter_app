import TwitterLogo from "../svg_logos/TwitterLogo"
import './AuthForm.css'
import LandingActions from "./LadingActions"
import Divider from "./Divider"
import TermsAndConditions from "./TermsAndConditions"
import { signInWithEmail,getUser } from "../../auth/firebase-auth"
import { useDispatch } from "react-redux"
import { authActions, uiControlActions } from "../../store"
const AuthForm = (props) => {
    const dispatch = useDispatch();
    function openCreateAccountForm(){
        dispatch(uiControlActions.shouldOpenModal())
    }
    return (

        <section className="auth-form-container">
            <TwitterLogo className="twitter-logo-auth-form" />
            <h1>Lo que está pasando ahora</h1>
            <h2>Únete a Twitter ahora mismo.</h2>
            <LandingActions />
            <Divider />
            <button className="register-button" onClick={openCreateAccountForm}>Regístrate con un número de teléfono</button>
            <TermsAndConditions />
            <div className="have-account-action-container">
                <h3>¿Ya tienes una cuenta?</h3>
                {/* LOGINN.>  HAY QUE HACER EL MODAL!!!!!!!! */}
                <button onClick={async () => {
                    let firebaseAuthData = await signInWithEmail('raultest@prueba.com')
                    let  userData = await getUser(firebaseAuthData.localId);
                    userData.localId = firebaseAuthData.localId;
                    userData.idToken = firebaseAuthData.idToken;
                    console.log(userData)
                    dispatch(authActions.setCredentials({...userData}))
                }}>Iniciar sesión</button>
            </div>
        </section>

    )
}
export default AuthForm
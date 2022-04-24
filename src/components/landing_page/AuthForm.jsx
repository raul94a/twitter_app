import TwitterLogo from "../svg_logos/TwitterLogo"
import './AuthForm.css'
import LandingActions from "./LadingActions"
import Divider from "./Divider"
import TermsAndConditions from "./TermsAndConditions"
import { signInWithEmail, getUser } from "../../auth/firebase-auth"
import { useDispatch } from "react-redux"
import { authActions, uiControlActions } from "../../store"
const AuthForm = (props) => {
    const dispatch = useDispatch();
    function openCreateAccountForm() {
        dispatch(uiControlActions.shouldOpenModal())
    }
    function openLoginModal() {
        dispatch(uiControlActions.openLoginModal());
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
                <button onClick={ openLoginModal }>Iniciar sesión</button>
            </div>
        </section>

    )
}
export default AuthForm
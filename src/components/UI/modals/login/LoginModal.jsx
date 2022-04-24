import Backdrop from "../Backdrop"
import ReactDOM from 'react-dom';
import './LoginWithEmail.css'
import LoginWithEmail from "./LoginWithEmail";

const LoginModal = (props) => {
   
    return (

        ReactDOM.createPortal(<div className="auth-modal">
            <Backdrop />
            <LoginWithEmail/>
           
        </div>, document.getElementById('modal'))




    )
}
export default LoginModal
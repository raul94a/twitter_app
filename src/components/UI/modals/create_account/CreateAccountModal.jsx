import Backdrop from "../Backdrop"
import ReactDOM from 'react-dom';
import './CreateAccountModal.css'
import { useState } from "react";
import TwitterLogo from "../../../svg_logos/TwitterLogo";
import CreateAccountFirstView from "./CreateAccountFirstView";
import CreateAccount from "./CreateAccount";
const CreateAccountModal = (props) => {
   
    return (

        ReactDOM.createPortal(<div className="auth-modal">
            <Backdrop />
            <CreateAccount/>
           
        </div>, document.getElementById('modal'))




    )
}
export default CreateAccountModal
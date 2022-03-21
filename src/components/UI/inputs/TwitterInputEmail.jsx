import { useState } from "react";
import './TwitterInputEmail.css'
const TwitterInputEmail = (props) => {
    const [animationEmail, setAnimationEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);

    let {emailInput, setEmailInput, error} = props;

    let emailClassName = 'span-email ';
    if (animationEmail || emailInput.length) {
        emailClassName += 'animate-span'
    }
    let errorClass = ''
    if(error){
        errorClass = 'error-email'
    }
    return (
        <label htmlFor="email" className={`${emailFocus ? 'focus-label' : ''} ${errorClass}`}>

            <span className={emailClassName}>Correo electrónico</span>


            <input id="email" type="text"
                value={emailInput}
                onChange={(e) => {
                    setEmailInput(e.target.value)
                }
                }
                onBlur={() => {
                    setAnimationEmail('')
                    setEmailFocus(false)

                }}
                onFocus={() => {
                    setEmailFocus(true)
                    setAnimationEmail('animate-span')
                }} />
        </label>

    )
}
export default TwitterInputEmail
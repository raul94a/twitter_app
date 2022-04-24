import './TwitterInputPassword.css'
import { useState } from 'react';
const TwitterInputPassword = (props) => {
    const [animationPassword, setAnimationPassword] = useState('');
    const [passwordFocus, setPasswordFocus] = useState(false);
    const { passwordInput, setPasswordInput } = props;

    let passwordClassName = 'span-email';
    if (animationPassword || passwordInput.length) {
        passwordClassName += ' animate-span'
    }
    return (
        <label htmlFor='password' className={`${passwordFocus ? 'focus-label' : ''}`}>
            <span className={passwordClassName}>Contraseña</span>
            <input id="password"
                type="password"
                value={passwordInput}
                onChange={(e) => {
                    setPasswordInput(e.target.value)

                }
                }
                onBlur={() => {
                    setAnimationPassword('')
                    setPasswordFocus(false)

                }}
                onFocus={() => {
                    setPasswordFocus(true)
                    setAnimationPassword('animate-span')
                }}
                />

        </label>
    )

}
export default TwitterInputPassword
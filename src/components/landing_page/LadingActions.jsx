import AppleLogo from '../svg_logos/AppleLogo'
import GoogleLogo from '../svg_logos/GoogleLogo'
import { signInWithGoogle, getUser, registerUser } from '../../auth/firebase-auth'
import { useDispatch } from 'react-redux';

import { authActions } from '../../store';
import './LandingActions.css'


const LandingActions = (props) => {
    //redux dispatcher
    const dispatch = useDispatch();
    //http hook

    async function signInWithGoogleHandler() {
        let data = await signInWithGoogle();
        console.log(data);
        const { user } = data;
        const { accessToken, displayName, email, uid } = user['_delegate']
        //¿Existe el usuario en la bd?
        const userData = await getUser(uid)
        //no existe usuario registrado en la base de datos
        if (!userData) {
            await registerUser(uid, displayName, email);
            dispatch(authActions.setCredentials({ username: displayName, email: email, alias: uid, localId: uid, idToken: accessToken }));
            return;
        }
        //existe usuario en la base de datos
        const { email:userEmail, alias, username } = userData;
        dispatch(authActions.setCredentials({ email: userEmail, username: username, alias: alias, idToken: accessToken, localId: uid }));
    }


    return (
        <article className='landing-page-actions-container'>
            <button onClick={() => signInWithGoogleHandler()}><GoogleLogo /> <span className='google-action-span'>Registrarse con Google</span></button>
            <button><AppleLogo className='apple-logo' /> <span className='apple-action-span'>Registrarse con Apple</span></button>

        </article>
    )
}
export default LandingActions
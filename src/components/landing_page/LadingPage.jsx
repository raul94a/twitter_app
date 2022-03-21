import AuthForm from "./AuthForm"
import TwitterPicture from "./TwitterPicture"
import './LandingPage.css'
import Footer from "./Footer"
import CreateAccountModal from "../UI/modals/create_account/CreateAccountModal"
import { useSelector } from "react-redux"
const LandingPage = (props) => {
    const isModalActive = useSelector(state => state.ui.openModal)
    return (
        <>
            {isModalActive && <CreateAccountModal/>}
            <div className="landing-page-container">
                <TwitterPicture />
                <AuthForm />
            </div>
            <Footer/>
        </>
    )
}
export default LandingPage
import './NavBar.css'

import HomeLogo from "../svg_logos/HomeLogo"
import ExploreLogo from "../svg_logos/ExploreLogo"
import MessageLogo from "../svg_logos/MessageLogo"
import NotificationLogo from "../svg_logos/NotificationLogo"
import ListasLogo from "../svg_logos/ListasLogo"
import ProfileLogo from "../svg_logos/ProfileLogo"
import SavedLogo from "../svg_logos/SavedLogo"

import TwitterLogo from '../svg_logos/TwitterLogo'

import NavItem from "./NavItem"
const NavBar = (props) => {
    return (
        <div className='nav-container'>

            <div className='nav-wrapper'>
                <div className='nav-spacer'></div>
                <nav className='navbar'>
                    <TwitterLogo className='logo-nav-bar' />
                    <NavItem name="Inicio" >
                        <HomeLogo className='nav-logo' />
                    </NavItem>
                    <NavItem name="Explorar" >
                        <ExploreLogo className='nav-logo' />
                    </NavItem>

                    <NavItem name="Notificaciones" >
                        <NotificationLogo className='nav-logo' />
                    </NavItem>
                    <NavItem name="Mensajes" >
                        <MessageLogo className='nav-logo' />
                    </NavItem>
                    <NavItem name="Guardados" >
                        <SavedLogo className='nav-logo' />
                    </NavItem>
                    <NavItem name="Listas" >
                        <ListasLogo className='nav-logo' />
                    </NavItem>
                    <NavItem name="Perfil" >
                        <ProfileLogo className='nav-logo' />
                    </NavItem>

                </nav>
            </div>
        </div>

    )
}
export default NavBar
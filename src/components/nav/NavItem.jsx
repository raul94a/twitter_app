import { Link } from 'react-router-dom';
import './NavItem.css'

const NavItem = (props) => {
    return (
        <div className="nav-item">
            {props.children}
            <Link to={`/${props.name}`}>

                <p>{props.name}</p>
            </Link>
        </div>
    )
}
export default NavItem
import './NavItem.css'
const NavItem = (props) => {
    return (
        <div className="nav-item">
            {props.children}
            <p>{props.name}</p>
        </div>
    )
}
export default NavItem
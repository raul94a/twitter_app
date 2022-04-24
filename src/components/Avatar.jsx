import './Avatar.css'
import  avatar from  '../assets/img/food.png';
const Avatar = (props) => {
    return (
       <img className='avatar' src={props.avatar || avatar}></img>
    )
}
export default Avatar
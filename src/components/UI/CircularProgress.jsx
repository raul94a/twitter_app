import './CircularProgress.css'
import {getConicGradient} from '../../helpers/conic-gradient';


const CircularProgress = (props) => {
    const characters = props.characters;
    const degrees = characters * 3;
    const gradient = getConicGradient(degrees);
    
    return (
        <div class="circle" style={{ background: gradient }}>
            <p class="value">{120 - characters}</p>
        </div>
    )
}
export default CircularProgress
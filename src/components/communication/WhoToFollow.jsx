import UserCard from '../user_card/UserCard'
import VSC from '../../assets/img/vsc.jpg'
import flutter from '../../assets/img/flutter.jpg'
import './WhoToFollow.css'

const WhoToFollow = (props) => {
    return (
        <div className='communication-container'>
            <h3>A quién seguir</h3>
            <UserCard
                avatar={VSC} 
                className=''
                username='Visual Studio Code'
                alias='VSCode'
                showDescription={false}
            />
            <UserCard 
                avatar={flutter}
                className=''
                username='Flutter'
                alias='flutter'
                showDescription={false}
            />
            <p className='show-more'>Mostrar más</p>
        </div>

    )
}
export default WhoToFollow
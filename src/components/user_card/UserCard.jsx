import './UserCard.css'
import Avatar from '../Avatar'
const UserCard = (props) => {
    const { className, username, avatar,alias, description, showDescription } = props;
    return (
        <div className={'flex-row-bet padding-card user-card' + className}>
            <div className='user-info-wrapper'>
                <Avatar avatar={avatar} />
                <div className='user-info'>
                    <p className='username'>{username}</p>
                    <p className='alias'>@{alias}</p>
                    {showDescription && <p className='description'>{description}</p>}
                </div>
            </div>
                <button onClick={() => { }} className='follow-btn'>Seguir</button>
        </div>
    )
}
export default UserCard
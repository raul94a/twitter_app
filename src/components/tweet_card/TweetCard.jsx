import Avatar from '../Avatar'
import './TweetCard.css'
const TweetCard = (props) => {
    const { username, alias } = props;
    return (
        <article className='tweet-container'>
            <Avatar />
            <div className='tweet-card-column'>
                <p className='tweet-card-user-info'><strong>{username} </strong><span>{'@' + alias} · <time>9 min</time></span></p>
                <p className='tweet-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus nobis quasi officia soluta nam repellat 
                    eaque natus accusantium ea consequatur magni possimus harum hic sint, tenetur recusandae cumque est?
                </p>
                <div className='tweet-actions'></div>
            </div>


        </article>
    )
}
export default TweetCard
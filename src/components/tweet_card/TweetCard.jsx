import './TweetCard.css'
import { fromMillisToMinutes } from '../../helpers/conic-gradient';
import Avatar from '../Avatar'
const TweetCard = (props) => {
    const { username, alias, tweet, date } = props;

    let howLongFromTweet = fromMillisToMinutes(date);
    

    return (
        <article className='tweet-container'>
            <Avatar />
            <div className='tweet-card-column'>
                <p className='tweet-card-user-info'><strong>{username} </strong><span>{'@' + alias} · <time>{howLongFromTweet} min</time></span></p>
                <p className='tweet-info'>
                   {tweet}
                </p>
                <div className='tweet-actions'></div>
            </div>


        </article>
    )
}
export default TweetCard
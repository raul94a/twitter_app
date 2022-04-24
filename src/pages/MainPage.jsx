import TweetForm from '../components/TweetForm'
import TweetCard from '../components/tweet_card/TweetCard'
import { useHttp } from '../hooks/use-http'
import Avatar from '../components/Avatar'
import { useEffect } from 'react'
import { tweetActions } from '../store'
import { useSelector, useDispatch } from 'react-redux'

function MainPage() {
    const { request } = useHttp();
    const dispatch = useDispatch();
    const tweets = useSelector(state => state.tweets.tweets)
    useEffect(() => {
        async function getTweets() {
            const data = await request('https://twitter-1b4e1-default-rtdb.europe-west1.firebasedatabase.app/tweets.json', {
                method: 'GET',
            });

            const fetchedTweets = [];
            for (let firebaseId in data) {
                fetchedTweets.push({
                    id: firebaseId,
                    ...data[firebaseId]
                })
            }
            dispatch(tweetActions.setTweets({ tweets: fetchedTweets.reverse() }));


        }


        getTweets()

        
    }, [])
    return (<>
        <h4>Inicio</h4>
        <div className="form-container-control">
            <Avatar />
            <TweetForm />
        </div>
        <section className='tweets-container' >
            {tweets && tweets.map(tweet => <TweetCard key={tweet.id} {...tweet} />)}
        </section></>);
}

export default MainPage;
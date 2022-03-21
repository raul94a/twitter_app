import Avatar from './Avatar'
import './AppContainer.css'
import TweetForm from './TweetForm'
import TweetCard from './tweet_card/TweetCard'
import { useHttp } from '../hooks/use-http'
import { useEffect } from 'react'
import { tweetActions } from '../store'
import { authActions } from '../store'
import { useSelector, useDispatch } from 'react-redux'


const AppContainer = (props) => {
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
    return (

        <section className='app-container'>
            <h4>Inicio</h4>
            <div className="form-container-control">
                <Avatar />

                <TweetForm />
            </div>
            <section className='tweets-container'>
                {tweets && tweets.map(tweet => <TweetCard key={tweet.id} {...tweet} />)}
            </section>


        </section>

    )
}
export default AppContainer
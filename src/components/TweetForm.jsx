import { useEffect, useState} from 'react';
import './TweetForm.css'
import CircularProgress from './UI/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import { tweetActions } from '../store';
import { useHttp } from '../hooks/use-http';

let initialRun = true;

const TweetForm = (props) => {
    const [isTextAreaFocus, setFocusTextArea] = useState(false)
    const [textAreaInput, setTextArea] = useState('');
    const [tweet, setTweet] = useState({});
    const { request } = useHttp();
    const canSendTweet = useSelector(state => state.tweets.sendTweet);
    const userCredentials = useSelector(state => state.auth)
    console.log(userCredentials)
    const dispatch = useDispatch();

    function changeFocusState() {
        setFocusTextArea(!isTextAreaFocus)
    }
    function onChange(e) {
        setTextArea(e.target.value)
    }

    function onClick(event) {
       
        event.preventDefault();
        setTweet({
            username: userCredentials.username,
            alias: userCredentials.alias,
            localId: userCredentials.localId,
            tweet: textAreaInput,
            date: Date.now()
        })
        dispatch(tweetActions.changeSendingStatus());
    }
    function dispatchPool(tweet){
        
        dispatch(tweetActions.addTweet({ tweet: tweet }))
        dispatch(tweetActions.changeSendingStatus());
        dispatch(authActions.addTweet({tweet: tweet['id']}));
    }

    useEffect(() => {
       
        if(!canSendTweet || initialRun){
            initialRun = false
            return;
        }
        // console.log(`Se ha disparado useEffect con el tweet siguiente: `);
        // console.table(tweet);
        const sendTweet = async () => {
            let data = await request(
                'https://twitter-1b4e1-default-rtdb.europe-west1.firebasedatabase.app/tweets.json',{
                    method: 'POST',
                    body: tweet,
                    headers: {'Content-Type': 'application/json'}
                }
               
            );
            const name = data['name'];
            tweet['id'] = name;
            setTweet(tweet)
            dispatchPool(tweet);
        }

        sendTweet();


    }, [canSendTweet, dispatch])
   
    return (
        <form className='tweet-form'>
         
            <textarea type='text'
           
                value={textAreaInput}
                onChange={(e) => onChange(e)}
                placeholder='¿Qué está pasando?'
                onFocus={changeFocusState}
                onBlur={changeFocusState}></textarea>
            {isTextAreaFocus && <span className='tweet-form-info-span'>Cualquier persona puede responder</span>}
            <div className='tweet-form-container-actions'>

                <div className='tweet-form-actions'>
                    <div className='actions'>ACTIONS</div>
                    <section className="tweet-form-ui-data">
                        {isTextAreaFocus && <CircularProgress characters={textAreaInput.length} />}
                    </section>
                </div>
                <button disabled={textAreaInput.length === 0}
                    className={`tweet-form-button`}
                    type='submit'
                    onClick={(e) => onClick(e)}
                >Twittear</button>
            </div>
        </form>
    )
}
export default TweetForm
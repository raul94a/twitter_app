import Avatar from './Avatar'
import './AppContainer.css'
import TweetForm from './TweetForm'
import TweetCard from './tweet_card/TweetCard'

const tweetsMock = [
    {
        username: 'Pedro Sanchez',
        alias: 'pdrsnchz'
    }, {
        username: 'Pablo casado',
        alias: 'pablopelele'
    }, {
        username: 'M.Rajoy',
        alias: 'unknownperson'
    }, {
        username: 'Joe Biden',
        alias: 'POTUS'
    },
]

const AppContainer = (props) => {
    return (

        <section className='app-container'>
            <h4>Inicio</h4>
            <div className="form-container-control">
                <Avatar />

                <TweetForm />
            </div>
            <section className='tweets-container'>
                {tweetsMock.map(tweet => <TweetCard username={tweet.username} alias={tweet.alias}/>)}
            </section>


        </section>

    )
}
export default AppContainer
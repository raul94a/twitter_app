import TwitterLogo from '../svg_logos/TwitterLogo';
import './TwitterPicture.css'
let imgUrl = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png';
const TwitterPicture = (props) => {
    return (
        <section className='twitter-picture-container'>
            <TwitterLogo className = 'twitter-logo'/>
            <img src={imgUrl} alt='Twitter landing picture' className='twitter-picture'/>

        </section>
    )
}
export default TwitterPicture
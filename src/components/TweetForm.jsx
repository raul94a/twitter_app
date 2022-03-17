import { useState } from 'react';
import './TweetForm.css'
import CircularProgress from './UI/CircularProgress';
const TweetForm = (props) => {
    const [isTextAreaFocus, setFocusTextArea] = useState(false)
    const [textAreaInput, setTextArea] = useState('')
    

    function changeFocusState() {
        setFocusTextArea(!isTextAreaFocus)
    }
    function onClick(event) {
        event.preventDefault();
    }
    function onChange(e) {
        setTextArea(e.target.value);

     
    }

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
                    {isTextAreaFocus && <CircularProgress characters = {textAreaInput.length}/>}
                    </section>
                </div>
                <button disabled={textAreaInput.length === 0} 
                    className= {`tweet-form-button`} 
                    type='submit' 
                    onClick={(e) => onClick(e)}
                >Twittear</button>
            </div>
        </form>
    )
}
export default TweetForm
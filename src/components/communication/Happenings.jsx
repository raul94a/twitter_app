import { useEffect, useState } from 'react';
import HappeningElement from './HappeningElement'
import './Happenings.css'
import { useDispatch, useSelector } from 'react-redux';
import { uiControlActions } from '../../store';
const dummy_news = [
    {
        header: 'Guerra en Ucrania',
        title: 'Rusia continua sus ataques a ciudades claves de Ucrania',
        tweetsNumber: '22,7 mil Tweets'
    },
    {
        header: 'Tendecias en España',
        title: 'Pedro Sánchez',
        tweetsNumber: '12,1 mil Tweets'
    },
    {
        header: 'Tendencias en España',
        title: 'Lidl',
        tweetsNumber: '3,4 mil Tweets'
    },
    {
        header: 'Tendencias en España',
        title: 'Mbappe',
        tweetsNumber: '137,1 mil Tweets'
    },
]
const Happenings = (props) => {

    const showHappenings = useSelector(state => state.ui.showHappeningsFirstElements);
    const dispatch = useDispatch();
    const [moveCommunicationUp, setMoveCommunicationUp] = useState(null)
    const happenings = dummy_news.map(
        (happening, index) =>
            <HappeningElement
                show={index < 1 ? showHappenings : true}
                header={happening.header}
                title={happening.title}
                tweetsNumber={happening.tweetsNumber}
            />);
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            let scrollTop = e.target.documentElement.scrollTop;
            let offsetHeight = e.target.body.offsetHeight;
            let scrollHeightTrigger = (offsetHeight - scrollTop) / 2;
            if (scrollTop >= scrollHeightTrigger) {
                setMoveCommunicationUp(true);
                dispatch(uiControlActions.hideHappeningsFirstElements())
            } else {
                setMoveCommunicationUp(false)
                dispatch(uiControlActions.showHappeningsFirstElements());
            }
        })
    }, [])

    return (

        <div className={`communication-container${moveCommunicationUp ? ' translate-up' : ' translate-down'}`}>
            <h3>Qué está pasando</h3>
            {happenings}
        </div>


    )
}
export default Happenings
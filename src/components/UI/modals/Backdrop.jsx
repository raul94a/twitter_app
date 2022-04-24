import { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiControlActions } from '../../../store';
import './Backdrop.css'

const Backdrop = (props) => {
    const [height,setHeight] = useState(0);
    const dispatch = useDispatch();
    function closeModal(){
        dispatch(uiControlActions.closeAllModals())
    }
    useEffect(()=>{
        if(!height){
            setHeight(document.documentElement.offsetHeight);
        }
    },[])
    // let height = document.documentElement.offsetHeight
 
    return(ReactDOM.createPortal(
    <span 
        className='backdrop-active' 
        onClick={closeModal}
        style={{height: height}}>
            
    </span>, document.getElementById('backdrop')))
}
export default Backdrop
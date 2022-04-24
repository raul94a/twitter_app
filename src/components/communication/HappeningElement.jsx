import './HappeningElement.css'
const HappeningElement = (props) => {
    // console.log('show: ',props.show)
    if (!props.show) return(<></>);
    return (
        <div className='happening-element'>
            <p className='happening-header'>{props.header}</p>
            <p className='happening-title'>{props.title}</p>
            <p className='tweets-number'>{props.tweetsNumber}</p>
        </div>


    )
}
export default HappeningElement
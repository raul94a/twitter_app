import SearchLogo from '../svg_logos/SearchLogo'
import './CommunicationColumn.css'
import Happenings from './Happenings'
import WhoToFollow from './WhoToFollow'
const CommunicationColumn = (props) => {
    return (
        <div className='communication-wrapper'>
            <section className='communication-column'>
                <form className='communication-search'>
                    <label htmlFor='search'>
                        <SearchLogo className='search-logo' />
                        <input type='text' placeholder='Buscar en Twitter' />
                    </label>
                </form>
                <Happenings />
                <WhoToFollow />
            </section>
        </div>
    )
}
export default CommunicationColumn
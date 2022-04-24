import './AppContainer.css'
import NavBar from './nav/NavBar'
import CommunicationColumn from './communication/CommunicationColumn'
import  {Routes,Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';

// document.body.onscrol(()=>{
//     console.log('asdfjlasf')
// });

const AppContainer = (props) => {
    
    


    return (
        <main>
           <NavBar/>


            <section className='app-container'>
                <Routes>
                    <Route path='Inicio' element={<MainPage/>}> 

                    </Route>
                </Routes>
            </section>

            <CommunicationColumn/>

        </main>
    )
}
export default AppContainer
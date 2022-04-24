import './App.css';
import AppContainer from './components/AppContainer';
import LandingPage from './components/landing_page/LadingPage';
import { useSelector } from 'react-redux';
import Backdrop from './components/UI/modals/Backdrop';
function App() {
  const userIsLoggedIn = useSelector(state => state.auth.loggedIn);
  return (
    <>
      {!userIsLoggedIn && <LandingPage />}
      {userIsLoggedIn && <AppContainer />}
    </>
  );
}

export default App;

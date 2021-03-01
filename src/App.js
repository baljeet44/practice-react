import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import About from './About';
import Hooku from './Hooku';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;

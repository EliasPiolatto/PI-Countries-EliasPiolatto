import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import CountryDetail from './Components/Details/CountryDetail';
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import ListActivities from './Components/ListActivities/ListActivities';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
      <Switch>
        <Route exact path='/activities' component={ListActivities}/>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/detail/:id' component={CountryDetail}/>
        <Route exact path='/form' component={Form}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

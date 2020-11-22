// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Nav from './shared/components/Navigation/Nav';
import Navstaff from './shared/components/Navigation/NavStaff';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Navstaff />
        <Switch>
          <Route path="/" exact />
        <Redirect to="/" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './shared/components/Navigation/Nav';
import Auth from './user/pages/Auth';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Auth /> */}
        <Switch>
          <Route path="/" exact />
          <Route path="/auth" exact>
            <Auth />
          </Route>
        <Redirect to="/" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

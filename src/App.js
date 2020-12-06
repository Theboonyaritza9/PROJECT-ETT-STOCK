// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './shared/components/Navigation/Nav';
import Auth from './user/pages/Auth';
// import Home from './Home';
import DetailsTool from "./tools/pages/DetailsTool"
import Tool from './tools/pages/Tool';
// import TestSwipe from './TestSwipe';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <TestSwipe /> */}
        {/* <Auth /> */}
        <Switch>
          <Route path="/" exact>
            <Tool />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/detail">
            <DetailsTool />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

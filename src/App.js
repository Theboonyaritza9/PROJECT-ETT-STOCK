// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './shared/components/Navigation/Nav';
import Auth from './user/pages/Auth';
// import Home from './Home';
import DetailsTool from "./tools/pages/DetailsTool"
import Tool from './tools/pages/Tool';
import DetailsBoards from './boards/pages/DetailsBoards';
import Board from './boards/pages/Board';
import Todolist from './todolist/page/Todolist';
import HistoryBoard from './history/page/HistoryBoard';
import HistoryProject from './history/page/HistoryProject';
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
          <Route path="/detail/:toolId">
            <DetailsTool />
          </Route>
          <Route path="/boards">
            <Board />
          </Route>
          <Route path="/detailboard">
            <DetailsBoards />
          </Route>
          <Route path="/todo">
            <Todolist />
          </Route>
          <Route path="/history/boards">
            <HistoryBoard />
          </Route>
          <Route path="/history/project">
            <HistoryProject />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

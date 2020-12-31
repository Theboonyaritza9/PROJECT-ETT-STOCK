import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './shared/components/Navigation/Nav';
import Auth from './user/pages/Auth';
import DetailsTool from "./tools/pages/DetailsTool"
import Tool from './tools/pages/Tool';
import DetailsBoards from './boards/pages/DetailsBoards';
import Board from './boards/pages/Board';
import Todolist from './todolist/page/Todolist';
import HistoryBoard from './history/page/HistoryBoard';
import HistoryProject from './history/page/HistoryProject';
import BoardIncomplete from './boards/pages/BoardIncomplete';
import { AuthContext } from "./shared/context/Auth-Context";
import { useAuth } from "./shared/hooks/auth-hook";
// import TestSwipe from './TestSwipe';


function App() {

  const { login, token, statusId, logout } = useAuth();
  console.log("App", token);

  let routes;

  if (!token) {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }

  else {
    routes = (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Tool />
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
          <Route path="/board/incomplete">
            <BoardIncomplete />
          </Route>
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    )
  }


  // return (
  //   <AuthContext.Provider value={{ isLoggedIn: token, login: login }}>
  //     <div className="App">
  //       <Router>
  //         <Nav />
  //         <Switch>
  //           <Route path="/" exact>
  //             <Tool />
  //           </Route>
  //           <Route path="/auth">
  //             <Auth />
  //           </Route>
  //           <Route path="/detail/:toolId">
  //             <DetailsTool />
  //           </Route>
  //           <Route path="/boards">
  //             <Board />
  //           </Route>
  //           <Route path="/detailboard">
  //             <DetailsBoards />
  //           </Route>
  //           <Route path="/todo">
  //             <Todolist />
  //           </Route>
  //           <Route path="/history/boards">
  //             <HistoryBoard />
  //           </Route>
  //           <Route path="/history/project">
  //             <HistoryProject />
  //           </Route>
  //           <Route path="/board/incomplete">
  //             <BoardIncomplete />
  //           </Route>
  //           <Redirect to="/" />
  //         </Switch>
  //       </Router>

  //     </div>
  //   </AuthContext.Provider>
  // );

  return (
    <AuthContext.Provider value={{ isLoggedIn: token, login: login, statusId: statusId, logout: logout }}>
      <div className="App">
        <Router>
          {routes}
        </Router>

      </div>
    </AuthContext.Provider>
  );
}

export default App;

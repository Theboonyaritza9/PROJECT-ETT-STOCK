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
import History from './history/page/History';
import DetailHistoryProject from './history/page/DetailHistoryProject';
import BoardIncomplete from './boards/pages/BoardIncomplete';
import { AuthContext } from "./shared/context/Auth-Context";
import { useAuth } from "./shared/hooks/auth-hook";
import { FilterContext } from "./shared/context/Filter-Context";
import { useFilter } from "./shared/filter/Filter-Tool";
import HistoryProject from './history/page/HistoryProject';
import EditProfile from './user/pages/EditProfile';
import CreateTool from './tools/pages/CreateTool';
import RequestBoard from './boards/pages/RequestBoard';
import CreateBoardForm from './boards/pages/CreateBoardForm';
import CreateProjectForm from './boards/pages/CreateProjectForm';
// import TestSwipe from './TestSwipe';


function App() {

  const { login, token, statusId, logout } = useAuth();
  const { type, status, tool } = useFilter();
  // console.log("App", token);

  // This code block for deploying
  // let routes;
  // if (!token) {
  //   routes = (
  //     <Switch>
  //       <Route path="/auth">
  //         <Auth />
  //       </Route>
  //       <Redirect to="/auth" />
  //     </Switch>
  //   )
  // }

  // else {
  //   routes = (
  //     <React.Fragment>
  //       <Nav />
  //       <Switch>
  //         <Route path="/" exact>
  //           <FilterContext.Provider value={{ type: type, status: status, tool: tool }}>
  //             <Tool />
  //           </FilterContext.Provider>
  //         </Route>
  //         <Route path="/createtool">
  //           <CreateTool />
  //         </Route>
  //         <Route path="/profile">
  //           <EditProfile />
  //         </Route>
  //         <Route path="/detail/:toolId">
  //           <DetailsTool />
  //         </Route>
  //         <Route path="/boards">
  //           <Board />
  //         </Route>
  //         <Route path="/requestboard">
  //           <RequestBoard />
  //         </Route>
  //         <Route path="/detailboard">
  //           <DetailsBoards />
  //         </Route>
  //         <Route path="/todo">
  //           <Todolist />
  //         </Route>
  //         <Route path="/history/boards">
  //           <History keyApi={1} />
  //         </Route>
  //         <Route path="/history/tools
  //         ">
  //           <History keyApi={2} />
  //         </Route>
  //         <Route path="/history/project">
  //           <HistoryProject />
  //         </Route>
  //         <Route path="/history/detailproject">
  //           <DetailHistoryProject />
  //         </Route>
  //         <Route path="/board/incomplete">
  //           <BoardIncomplete />
  //         </Route>
  //         <Redirect to="/" />
  //       </Switch>
  //     </React.Fragment>
  //   )
  // }

  // Uncomment when coding or revise program
  return (
    <AuthContext.Provider value={{ isLoggedIn: token, login: login, statusId: true }}>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <FilterContext.Provider value={{ type: type, status: status, tool: tool }}>
                <Tool />
              </FilterContext.Provider>
            </Route>
            <Route path="/createtool">
              <CreateTool />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/profile">
              <EditProfile />
            </Route>
            <Route path="/detail/:toolId">
              <DetailsTool />
            </Route>
            <Route path="/boards">
              <Board />
            </Route>
            <Route path="/createboard">
              <CreateBoardForm />
            </Route>
            <Route path="/createproject">
              <CreateProjectForm />
            </Route>
            <Route path="/requestboard">
              <RequestBoard />
            </Route>
            <Route path="/detailboard">
              <DetailsBoards />
            </Route>
            <Route path="/todo">
              <Todolist />
            </Route>
            <Route path="/history/boards">
              <History keyApi={1} />
            </Route>
            <Route path="/history/board/:bid">
              <History/>
            </Route>
            <Route path="/history/tools">
              <History keyApi={2} />
            </Route>
            <Route path="/history/project">
              <HistoryProject />
            </Route>
            <Route path="/history/detailproject">
              <DetailHistoryProject />
            </Route>
            <Route path="/board/incomplete">
              <BoardIncomplete />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>

      </div>
    </AuthContext.Provider>
  );

  // This Return for deploying
  // return (
  //   <AuthContext.Provider value={{ isLoggedIn: token, login: login, statusId: statusId, logout: logout }}>
  //     <div className="App">
  //       <Router>
  //         {routes}
  //       </Router>

  //     </div>
  //   </AuthContext.Provider>
  // );
}

export default App;

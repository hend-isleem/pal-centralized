import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SignUpGeneral from "./components/general/Sign-up-general";
import SignUpCompany from "./components/company/Sign-up-company";
import SignUpUser from "./components/user/Sign-up-user";
import Login from "./components/general/Login";
import MainPageHeader from "./components/general/Home-page-header";
import MainPageFooter from "./components/general/Home-page-footer";
import MainPagePosts from "./components/general/Home-page-posts";
import Search from "./components/general/Search";
import UserPageHeader from "./components/user/User-page-header";

import { logout } from "./actions/index";

const App: React.FC = () => {
  // let isLogged: any = useSelector((state: any) => state.user);
  // const dispatch = useDispatch();
  let isLogged: any = localStorage.getItem("token");

  useEffect(() => {
    isLogged = localStorage.getItem("token");
  }, []);

  {
    console.log(localStorage.getItem("token"));
  }
  if (isLogged)
    return (
      <Router>
        <div className="App">
          <UserPageHeader />
          <Switch>
            <Route path="/" exact>
              <Search />
              <MainPagePosts />
            </Route>
            <Route path="/signup" exact component={SignUpGeneral} />
            <Route path="/signupcompany" component={SignUpCompany} />
            <Route path="/signupuser" component={SignUpUser} />{" "}
            <Route path="/login" component={Login} />
          </Switch>
          <MainPageFooter />
        </div>
      </Router>
    );
  else
    return (
      <Router>
        <div className="App">
          <MainPageHeader />
          <Switch>
            <Route path="/" exact>
              <Search />
              <MainPagePosts />
            </Route>
            <Route path="/signup" exact component={SignUpGeneral} />
            <Route path="/signupcompany" component={SignUpCompany} />
            <Route path="/signupuser" component={SignUpUser} />{" "}
            <Route path="/login" component={Login} />
          </Switch>
          <MainPageFooter />
        </div>
      </Router>
    );
};

export default App;

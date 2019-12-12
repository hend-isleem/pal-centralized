import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import SignUpGeneral from "./components/general/Sign-up-general";
import SignUpCompany from "./components/company/Sign-up-company";
import SignUpUser from "./components/user/Sign-up-user";
import Login from "./components/general/Login";
import MainPageHeader from "./components/general/Home-page-header";
import MainPageFooter from "./components/general/Home-page-footer";
import MainPagePosts from "./components/general/Home-page-posts";
import Search from "./components/general/Search";
import UserPageHeader from "./components/user/User-page-header";
import SearchResult from "./components/general/Seacrh-result";

// import { logout } from "./actions/index";
// import { signup } from "./actions/index";

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

  // check if there is a user logged or not
  useEffect(() => {
    setIsLogged(localStorage.getItem("token"));
  }, []);

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
            <Route path="/searchresult">
              <Search />
              <SearchResult />
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
            <Route path="/searchresult">
              <Search />
              <SearchResult />
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

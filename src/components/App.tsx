import { Switch, Route } from "react-router-dom";
import { Routes } from "common/enums";
import Header from "./header";
import SignUp from "./signup";
import HomePage from "./homePage";
import Reject from "./reject";
import Review from "./review";
import Footer from "./footer";
import Account from "./account";
import Welcome from "./welcome";

import "./App.css";
import {useEffect, useState} from "react";
import AppContext from './AppContext';
import {FORM_ID} from "./config";

export interface IUserSettings {
  formKey?: string | null;
}

function App() {
  const [formKey, setFormKey] = useState<string | null>(null);

  const userSettings: IUserSettings = {
    formKey
  };

  const url = new URL(window.location.href);
  useEffect(() => {
    setFormKey(url.searchParams.get("form_key") || FORM_ID);
  }, [url.searchParams])
  return (
      <AppContext.Provider value={userSettings}>
        <div className="App" id="main-container">
          <Header />
          <Switch>
            <Route path={Routes.DEFAULT} component={HomePage} exact={true} />
            <Route path={Routes.SIGNUP} component={SignUp} />
            <Route path={Routes.REJECT} component={Reject} />
            <Route path={Routes.REVIEW} component={Review} />
            <Route path={Routes.WELCOME} component={Welcome} />
            <Route path={Routes.ACCOUNT} component={Account} />
          </Switch>
          <Footer />
        </div>
      </AppContext.Provider>
  );
}

export default App;

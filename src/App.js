import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={"/"} exact component={HomePage} />
              <Route path={"/about"} component={AboutPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;

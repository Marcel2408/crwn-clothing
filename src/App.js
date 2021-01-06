import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
/*
create customButton with children prop
todo style customButton
todo update style sign-in
commit all changes
*/

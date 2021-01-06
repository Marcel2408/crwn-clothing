import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
/*
style collection-preview
create collection-item
style collection-item (except the 'add to cart' btn)
style padding on body in app.css
todo commit all changes
*/
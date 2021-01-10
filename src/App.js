import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //creates the user in firebase db if it doesn't exist and returns the ref to the snapshot
        // onSnapshot listens to changes in the user snapshot where the userRef is pointing
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    }); // Adds an observer for changes to the user's sign-in state.
  }

  componentWillUnmount() {
    // to avoid memory leaks unsubscribe from the observer
    this.unsubscribeFromAuth(); //? Whenever I call the onAuthStateChanged() or onSnapshot() methods from our auth  library or referenceObject, I get back a function that lets us unsubscribe from the listener I just instantiated.
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
}); //? params could be destructured as {user: {currentUser}}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/*
todo create cart-dropdown component and styles
commit all changes

*/

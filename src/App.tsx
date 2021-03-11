import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";

const App = () => {
  return (
    <div className="root-layout">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" render={() => <SignInPage />} />
          <Route path="/" render={() => <MainPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainHeader from "./components/Header/MainHeader";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import BingoCreatePage from "./pages/BingoCreatePage";

const App = () => {
  return (
    <div className="root-layout">
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <MainHeader />} />
        </Switch>
        <Switch>
          <Route exact path="/create" render={() => <BingoCreatePage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
          <Route exact path="/" render={() => <MainPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

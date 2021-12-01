import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Signin from "./components/Login/Signin";
import AuthProvider from "./context/AuthProvider";
import Doctors from "./components/Doctors/Doctors";
import GetService from "./components/GetService/GetS/GetService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <PrivateRoute path="/service/:guid">
              <GetService></GetService>
            </PrivateRoute>
            <Route path="/login">
              <Signin></Signin>
            </Route>
            <Route path="/question">
              <Question></Question>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

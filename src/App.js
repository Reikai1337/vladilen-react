import React from "react";
import Quiz from "./containers/Quiz/Quiz";
import Layout from "./hoc/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Register from "./containers/Auth/Register/Register";



const App = () => {
  console.log(process.env);
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <Provider store={store}>
          <Layout>
            <Switch>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/quiz-list" render={() => <QuizList />} />
              <Route exact path="/quiz/:id" render={() => <Quiz />} />
              <Route exact path="/create-the-quiz" render={() => <QuizCreator />} />
              <Route exact path="/auth" render={() => <Auth />} />
              <Route exact path="/register" render={() => <Register />} />
            </Switch>
          </Layout>
        </Provider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;

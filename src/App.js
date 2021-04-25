
import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
           <Home/>
        </Route>
        <Route path='/signin'>
          <SignIn/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

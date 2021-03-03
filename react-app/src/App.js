import Home from './Home/Home'
import FormLogin from './Login/FormLogin'
import React from 'react'
import FormRegister from './FormRegister'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/form-register' component={FormRegister} />
        <Route exact path='/form-login' component={FormLogin} />
      </Switch>
    </Router>
  );
}

export default App;

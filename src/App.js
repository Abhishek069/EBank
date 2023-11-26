import {Route, Switch} from 'react-router-dom'

import Login from './compomoent/Login'

import Home from './compomoent/Home'

import NotFound from './compomoent/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <NotFound />
    </Switch>
  </div>
)
export default App

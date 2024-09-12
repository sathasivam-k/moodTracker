import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App

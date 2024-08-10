import {Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Report from './components/Report'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// #region - Use these lists in your code.

// #endregion
const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/report" component={Report} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="bad-path" />
    </Switch>
  )
}

export default App

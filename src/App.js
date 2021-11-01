import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import { Home } from './components/Home'
import { Success } from './components/Success'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        U-Pizza
      </header>
      <Router>
        <Switch>
          <Route
            component={Home}
            exact
            path="/"
          />
          <Route
            component={Success}
            exact
            path="/success"
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App

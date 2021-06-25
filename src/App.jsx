import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'

function App() {
  return (
    <Router>
      <Link to="/">Usuarios</Link>

      <Switch>
        <Route path="/usuario/:id">
          <Usuario></Usuario>
        </Route>
        <Route exact path="/">
          <Usuarios></Usuarios>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

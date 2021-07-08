import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import Home from './pages/home/home'
import Login from './pages/login/login';
import Consulta from './pages/consulta/consulta';


// const PermissaoAdm = ({ component : Component }) => {
//   // <Route
//   //   render = {props =>
//   //     usuarioAutenticado() && parseJwt().role === '1' ?
//   //     <Component {...props} /> :
//   //     <Redirect to='login'/>
//   //   }
//   // />

//   <Route
//     render = { props => usuarioAutenticado() === 'false' ? <Redirect to='/login'/> : console.log('off')}
//   />
// }

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/consulta' component={Consulta}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


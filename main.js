import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App.jsx';
import Table from './Table.jsx';
import Form from './Form.jsx';
import { BrowserRouter,Route,NavLink,Switch  } from 'react-router-dom'

const isActiveFunc = (match, location) => {
  console.log(match,location)
}
// NavBar
const NavBar = () => (
        <nav>
           <NavLink activeStyle={{color: 'green'}} exact activeClassName="active" to="/">Home</NavLink>
           <NavLink activeStyle={{color: 'green'}} to={{pathname: '/table',state:{id:'1'}}}>Table</NavLink>
           <NavLink isActive={isActiveFunc} activeClassName="active" to="/form">Form</NavLink>
        </nav>
)

const RouteTest = () => (
      <BrowserRouter basename="/">
        <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/table" component={Table}/>
                <Route path="/form" component={Form}/>
              </Switch>
        </div>
      </BrowserRouter>
)

ReactDOM.render((
   <RouteTest />
), document.getElementById('routerTest'))

// ReactDOM.render(<AppIndex />, document.getElementById('app'));
// ReactDOM.render(<Table />, document.getElementById('table'));
// ReactDOM.render(<Form />, document.getElementById('form'));

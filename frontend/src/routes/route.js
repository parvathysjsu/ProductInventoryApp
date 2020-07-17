import {Route, Switch} from 'react-router-dom'
import Home from './../components/Home'
import Product from './../components/Product'
import Category from './../components/Category'
import React from 'react'
function Routes() {
  return (  <Switch>
        <Route to="/home" exact component={Home} />
        <Route to="/product" component={Product} />
        <Route to="/category" component={Category} />
    </Switch>)
}

export default Routes;
import React from 'react'
import { Route, Switch } from "react-router-dom"

import Todo from '../todo/Todo'
import About from '../about/About'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Switch>
        <Route exact path="/" component={Todo}/>
        <Route path="/todos" component={Todo}/>
        <Route path="/about" component={About}/>
    </Switch>
)
import React from 'react'
import { Router, Route, IndexRoute, } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import App from './App.js'
import Contact from './Contact.js'
const history = createHistory()
const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
        <Route path="/Contact" component={Contact}/>
        </Route>
    </Router>
)

export default routes 
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../template/Menu'
import Routes from './Routes'

export default props =>
    <Router>
        <div className="container">
            <Menu />
            <Routes />
        </div>
    </Router>

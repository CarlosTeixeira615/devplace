import React from 'react'
import {
    BrowserRouter as Routes,
    Switch,
    Route
} from 'react-router-dom'

import LandingPage from './pages/LandingPage'

import {
    GlobalStyle
} from './style/global'

const RoutesMain = () => {
    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Switch>
                    <Route path="/" exact component={ LandingPage } />
                </Switch>
            </Routes>
        </>
    )
}

export default RoutesMain
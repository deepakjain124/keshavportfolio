import React from 'react'
import NavBar from './components/Navbar'
import Section1 from './components/section1'
import Project from './components/Project'
// import Card from './components/Card'
// import Lunch from './components/Lunch'
// import Dinner from './components/Dinner'
// import Snack from './components/Snack'
// import All from './components/All'
// import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
const App = () => {
    return ( <
        > { ' ' } <
        NavBar / >
        <
        Switch >
        <
        Route exact path = "/" > { ' ' } <
        Section1 / > { ' ' } <
        /Route>{' '} <
        Route exact path = "/project" > { ' ' } <
        Project / > { ' ' } <
        /Route>{' '} <
        /Switch>{' '} <
        />
    )
}
export default App
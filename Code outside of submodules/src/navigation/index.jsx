import React from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import Header from '../header'
import Footer from '../footer'
import Home from '../home'
import Portfolio from '../portfolio'
import MakeGood from '../makeGood'
import ContactMe from '../contactMe'

const navigation = () => (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/makeGood" exact component={MakeGood} />
        <Route path="/contactMe" exact component={ContactMe}/>
        <Footer />
      </Router>
    </div>
  )

export default navigation;
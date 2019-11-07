import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import Sliders from './container/Sliders'
import Sliderss from './container/Sliderss'
import Slider from './container/Slider'
import Login from './container/Login'


export default class APP extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route path='/home' component={Home} />
                        <Route path='/start' component={Start} />
                        <Route path='/api' component={Api} />
                        <Route path='/about' component={About} />
                        <Route path='/login' component={Login} />
                    </div>
                    <div className='right'>
                        <Slider />
                        <Sliders  />
                        <Sliderss />   
                    </div>
                </div>
            </Router>
        )
    }
}

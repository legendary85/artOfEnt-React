import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './components/layout/navbar/NavigationBar.js'
import Landing from './components/landing/Landing.js'
import About from './components/about/About.js'
import Packages from './components/packages/Packages.js'
import Submitted from './components/submitted/Submitted.js'
// // import DemoContactForm from './components/contact/DemoContactForm.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/layout/footer/Footer.js'

// Redux
import { Provider } from 'react-redux';
import store from './store';


import './App.css';

const App = () => (
  <Provider>
    <Router>
      <Fragment>
        <NavigationBar />
        <Route exact path='/' component={Landing}></Route>
        <section className='container'>
          <Switch>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/packages' component={Packages}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/submitted' component={Submitted}></Route>
            {/* <Route path='/' render={() => <div style={{ color: 'white', display: 'grid', justifyItems: 'center', height: '70vh', alignItems: 'center' }}>404</div>}></Route> */}
            {/* <Route exact path='/contact' component={ContactForm}></Route> */}
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
)

export default App;

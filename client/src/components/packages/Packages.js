import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import './Packages.css'

class Packages extends Component {
  render() {
    return (
      <div id='packages' className='container'>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className='package-header'>Packages</h1>
        </div>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 shadow-sm">
              {/* <img src="https://i.pinimg.com/474x/da/28/de/da28deb6ed6596dd882294051aa0646b--burnt-orange-olive.jpg" className="card-img-top" alt="..."></img> */}
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Bronze Package </h4>
              </div>
              <div className="card-body normal">
                {/* <h1 className="card-title pricing-card-title">$100<small className="text-muted">/ hr</small></h1> */}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>DJ Service/MC</li>
                  <li>Facade</li>
                  <li>(2) PA Speakers</li>
                  <li>(2) Wireless Microphones</li>
                  <li>(8) Uplights</li>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </ul>
                < LinkContainer to='/contact'>
                  <button id='bronzeBtn' type="button" className="btn btn-lg btn-block btn-primary">Book Event</button>
                </LinkContainer>
              </div>
              <div className="card-body mobile">
                {/* <h1 className="card-title pricing-card-title">$100<small className="text-muted">/ hr</small></h1> */}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>DJ Service/MC</li>
                  <li>Facade</li>
                  <li>(2) PA Speakers</li>
                  <li>(2) Wireless Microphones</li>
                  <li>(8) Uplights</li>
                  <br />
                </ul>
                <LinkContainer to='/contact'>
                  <button id='bronzeBtn' type="button" className="btn btn-lg btn-block btn-primary">Book Event</button>
                </LinkContainer>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              {/* <img src="https://i.pinimg.com/originals/96/36/3c/96363c9337b2d1aad24323b1d9efda72.jpg" className="card-img-top" alt="..."></img> */}
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Gold Package</h4>
              </div>
              <div className="card-body">
                {/* <h1 className="card-title pricing-card-title">$150 <small className="text-muted">/ hr</small></h1> */}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>DJ Service/MC</li>
                  <li>Facade</li>
                  <li>(2) PA Speakers</li>
                  <li>(2) Wireless Microphones</li>
                  <li>(10) Uplights</li>
                  <li>Newlywed Game</li>
                  <li>Totum Light Stands</li>
                  <li>Ceremony service included 50% off <br />
                    (Wedding)</li>
                  <li>Cocktail Hour included <br /> (Wedding)</li>
                  <br />
                  <br />
                </ul>
                <LinkContainer to='/contact'>
                  <button id='goldBtn' type="button" className="btn  btn-block btn-lg  btn-primary ">Book Event</button>
                </LinkContainer>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              {/* <img src="https://media.istockphoto.com/photos/platinum-background-with-just-a-sheet-of-metal-picture-id123152972?k=6&m=123152972&s=170667a&w=0&h=vLnv8td_Wu6gwW6J6jf25qoyy2s4mZVYc1lTlOtVDXI=" className="card-img-top" alt="..."></img> */}
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Platinum Package</h4>
              </div>
              <div className="card-body">
                {/* <h1 className="card-title pricing-card-title">$250 <small className="text-muted">/ hr</small></h1> */}
                <ul className="list-unstyled mt-3 mb-4">
                  <li>DJ Service/MC</li>
                  <li>Facade/Totum</li>
                  <li>(2) PA Speakers</li>
                  <li>(2) Wireless Microphones</li>
                  <li>(10) Uplights</li>
                  <li>TV w/slideshow</li>
                  <li>Newlywed Games</li>
                  <li>Ceremony service included <br />(Wedding)</li>
                  <li>Cocktail Hour included <br />
                    (Wedding)</li>
                  <li>Photo booth included <br />(valued at $100 hr)</li>
                </ul>
                <LinkContainer to='/contact'>
                  <button id='goldBtn' type="button" className="btn  btn-block btn-lg  btn-primary ">Book Event</button>
                </LinkContainer>

              </div>
            </div>
          </div>

          <div id='addOns' className="card-deck text-center">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Add-Ons</h5>
              </div>
              <div className="card-body">


                <ul style={{ listStyleType: "none" }}>

                  <li>Ceremony service - $200</li>
                  <li>Cocktail Hour included Wedding - $150</li>
                  <li>Photo booth - $100 hr (minimal 2hr)</li>
                  <li>(10) Uplighting - $200</li>
                  <li>Custom Monogram - $250</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Packages
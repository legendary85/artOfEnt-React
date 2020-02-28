import React, { Component } from 'react'
// import blankImg from '../../assets/img/download.jpg'
import blankImg from '../../assets/img/dj.png'

import './About.css'

export class About extends Component {
  render() {
    return (
      <div id='about-container' className="container text-center">
        <h3 className='aboutUs'>About us</h3>
        {/* <p><em>We love what we do!</em></p> */}
        <p>Founded by owner and DJ US Navy veteran Karkeis Artis (DJ Artwork), Art of Entertainment Entertainment was started 4 years ago in Atlanta GA. Alongside business partner and DJ Gavin Nicholson, Art of Entertainment has skyrocketed to new horizons.</p>
        <p>Planning an event? Looking for an energetic, passionate, and professional DJ and entertainment company?  Art of Entertainment does just that. Our DJs cater to your needs and ensure that your event is a time to remember. We provide a wide variety of genres of music, and customized playlists just how you imagined it. Weddings, corporate events, birthday parties, school functions, you name it. Our absolute #1 priority is to create an unforgettable experience and an atmosphere like no other.</p>
        <p>Remember, Your Event is a Work of Art.</p>
        <br />
        <div className="row">
          <div className="col-sm-4">
            {/* <p><strong>Name</strong></p>
            <a href="#demo" data-toggle="collapse">
              <img className='img-circle person' src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F967e3d9ee88663c5a43e11adcecd9bcf.500x500x1.jpg" alt="Random Name"></img>
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div> */}
          </div>
          <div className="col-sm-4">
            <p><strong>DJ Artwork</strong></p>
            {/* <a href="#demo" data-toggle="collapse">
              <img className='img-circle person' src={artwork} alt="Random Name"></img>
            </a> */}
            <img className='img-circle person' src={blankImg} alt="Random Name"></img>
            {/* <div id="demo" className="collapse">
              <p>Mobile DJ</p>
              <p>Love to Travel</p>
              <p>DJ since 2016</p>
            </div> */}
          </div>
          <div className="col-sm-4">
            {/* <p><strong>Name</strong></p>
            <a href="#demo" data-toggle="collapse">
              <img className='img-circle person' src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F967e3d9ee88663c5a43e11adcecd9bcf.500x500x1.jpg" alt="Random Name"></img>
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default About
import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'

import './Submitted.css'

class Submitted extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Request Submitted!</h1>
          {/* <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
          <p className="lead">
            <LinkContainer to='/'>
              <Button color="primary">Return Home</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default Submitted
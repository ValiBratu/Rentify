import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from './common/Footer';
import NavMenu from './common/NavMenu';


export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div>
        <NavMenu></NavMenu>
        <Container>
          {this.props.children}
            </Container>
        <Footer></Footer>
      </div>
    );
  }
}

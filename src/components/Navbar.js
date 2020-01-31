import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive' inverted>
        <Container >
          <Link to='/'>
            <Menu.Item
              header
              name='star wars API'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>
          </Link>
          <Link to='/people'>
            <Menu.Item
              header
              name='people'
              active={activeItem === 'people'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>
          </Link>
          <Link to='/planets'>
            <Menu.Item
              header
              name='planets'
              active={activeItem === 'planets'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    )
  }
}
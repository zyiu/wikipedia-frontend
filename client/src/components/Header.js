import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import wiki_logo from '../wiki_logo.png';

class Header extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="header">
        <Menu size="large" widths="5" borderless className="menu">
          <Menu.Item header>
            <Icon name="home" />
          </Menu.Item>
          <Menu.Item>About Us</Menu.Item>
          <Menu.Item header>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;

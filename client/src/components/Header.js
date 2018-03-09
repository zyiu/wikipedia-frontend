import React from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import wiki_logo from '../wiki_logo.png';

class Header extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="header">
        <Menu size="large" widths="5" borderless className="menu">
          <Menu.Item>
            <h1>ZimmerBot</h1>
          </Menu.Item>
          <Menu.Item
            header
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name="home" />
          </Menu.Item>
          <Menu.Item
            header
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
            About Us
          </Menu.Item>
          <Menu.Item
            header
            header
            name="libraries"
            active={activeItem === 'libraries'}
            onClick={this.handleItemClick}
          >
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item>
            <Image src={wiki_logo} />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;

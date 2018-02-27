import React from 'react';
import { Menu } from 'semantic-ui-react';
import wiki_logo from '../wiki_logo.png';

class Header extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="header">
        <Menu color="olive">
          <Menu.Item header>ZimmerBot</Menu.Item>
          <Menu.Item header position="right">
            <img src={wiki_logo} alt={'Wikimedia Logo'} />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;

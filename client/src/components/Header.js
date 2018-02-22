import React from 'react';
import wiki_logo from '../wiki_logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Zimmerbot</h1>
        <img src={wiki_logo} alt={'Wikimedia Logo'} />
      </div>
    );
  }
}

export default Header;

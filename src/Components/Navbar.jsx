import React, { Component } from 'react';
import axios from 'axios';
import './Navbar.css';

export class Navbar extends Component {
  state = {
    storeName: '',
  };

  componentDidMount() {
    axios.get('https://my-store-strapi.onrender.com/api/setting') // Adjust API endpoint if needed
      .then(response => {
        this.setState({ storeName: response.data.data.store_name });
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching store name:', error);
      });
  }

  render() {
    return (
      <div className="navbar">
        {this.state.storeName || ''}
        <img src="https://i.postimg.cc/kMyGHt9H/istockphoto-1308675508-612x612-removebg-preview-1-1.png" alt="Logo" className="navbar-logo" />
      </div>
    );
  }
}

export default Navbar;

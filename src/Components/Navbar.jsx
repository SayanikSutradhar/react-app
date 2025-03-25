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
        {this.state.storeName || 'Loading...'}
        <img src="https://my-store-strapi.onrender.com/uploads/istockphoto_1308675508_612x612_removebg_preview_1_1_d99fa6eb5d.png" alt="Logo" className="navbar-logo" />
      </div>
    );
  }
}

export default Navbar;

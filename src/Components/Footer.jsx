import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube, FaPhone } from "react-icons/fa";
import "./Footer.css"; // Ensure this CSS file is created

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await axios.get("https://my-store-strapi.onrender.com/api/setting");
        setData(response.data?.data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="store-name">{data?.store_name || "Loading..."}</h2>
        <p className="about">{data?.about || "Fetching data..."}</p>

        <div className="social-icons">
          <a href={`https://wa.me/${data?.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href={data?.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href={data?.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href={data?.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <a href={`tel:${data?.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <FaPhone className="icon" />
          </a>
        </div>
      </div>
      <div>
      <p>For business inquiries, contact - <a href={`mailto:${data?.email}`}>{data?.email}</a></p>
      <p>© 2025 {data?.store_name || "Your Store"}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

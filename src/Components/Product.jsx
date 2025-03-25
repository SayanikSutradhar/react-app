import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  useEffect(() => {
    // Fetch product data
    fetch("https://my-store-strapi.onrender.com/api/products?populate=*")
      .then((res) => res.json())
      .then((data) => {
        const activeProducts = data.data.filter((product) => product.active);
        setProducts(activeProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));

    // Fetch WhatsApp number
    fetch("https://my-store-strapi.onrender.com/api/setting")
      .then((res) => res.json())
      .then((data) => {
        setWhatsappNumber(data.data.whatsappNumber);
      })
      .catch((err) => console.error("Error fetching WhatsApp number:", err));
  }, []);

  const handleBuyNow = (productName) => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=I%20want%20to%20buy%20this%20product:%20${encodeURIComponent(productName)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <br />
      <h1>Buy your favourite clay arts 💖 </h1>
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={`https://my-store-strapi.onrender.com${product.image?.url}`}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">INR. {product.price}</p>
          </div>
          <button className="buy-button" onClick={() => handleBuyNow(product.name)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Product;

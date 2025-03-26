import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import Preloader from "./Components/Preloader"; // Import the preloader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Show for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Product />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Home from './Components/Home';
import Footer from './Components/Footer';
import FAQ from './Components/FAQ';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Product />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

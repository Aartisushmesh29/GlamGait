import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignUp from "./Components/Pages/LoginSignUp";
import Profile from "./Components/Pages/Profile";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/men_banner.png";
import women_banner from "./Components/assets/women_banner.png";
import kids_banner from "./Components/assets/kids_banner.png";
import ContactMe from "./Components/contactMe/ContactMe";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;

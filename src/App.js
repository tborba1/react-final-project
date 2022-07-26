import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { UserProvider } from "./contexts/UserContext";
import AuthChecker from "./components/AuthChecker";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    // <ThemeProvider>
    <UserProvider>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HeaderFooter />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route
                path="/cart"
                element={
                  <AuthChecker>
                    <Cart />
                  </AuthChecker>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </UserProvider>

    // </ThemeProvider>
  );
}

export default App;

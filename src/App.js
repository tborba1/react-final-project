import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderFooter from './components/HeaderFooter';
import Home from './pages/Home' ;
import Products from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  return (
    // <ThemeProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/checkout" element={<Checkout />} />  */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    // </ThemeProvider>

  );
}

export default App;

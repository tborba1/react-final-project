import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderFooter from './components/HeaderFooter';
import Products from './pages/Products';

function App() {
  return (
    // <ThemeProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Products />} />
            {/* <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    // </ThemeProvider>

  );
}

export default App;

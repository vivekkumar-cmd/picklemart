import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import LoginForm from './components/auth/LoginForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Register Page - Coming Soon</h1></div>} />
              <Route path="/cart" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Cart Page - Coming Soon</h1></div>} />
              <Route path="/product/:id" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Product Details - Coming Soon</h1></div>} />
              <Route path="/categories" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Categories Page - Coming Soon</h1></div>} />
              <Route path="/sellers" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Sellers Page - Coming Soon</h1></div>} />
              <Route path="/profile" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Profile Page - Coming Soon</h1></div>} />
              <Route path="/orders" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Orders Page - Coming Soon</h1></div>} />
              <Route path="/admin/dashboard" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Admin Dashboard - Coming Soon</h1></div>} />
              <Route path="/seller/dashboard" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Seller Dashboard - Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Smartphone } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PhoneStore</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="hidden sm:block text-sm text-gray-600 hover:text-red-600 transition"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Войти
                </Link>
                <Link
                  to="/register"
                  className="hidden sm:block px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition"
                >
                  Регистрация
                </Link>
              </>
            )}
            <Link
              to="/cart"
              className="relative p-2.5 hover:bg-gray-100 rounded-xl transition group"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
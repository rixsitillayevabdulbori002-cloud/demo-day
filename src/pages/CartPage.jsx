import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';
import Footer from '../components/Footer';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="bg-linear-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Корзина пуста</h2>
            <p className="text-gray-600 mb-6">Добавьте товары в корзину, чтобы оформить заказ</p>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition"
            >
              Перейти к покупкам
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
          <span className="ml-1 font-medium">Продолжить покупки</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Очистить корзину
              </button>
            </div>

            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <p className="text-sm text-gray-500">Цвет: {item.color} | Память: {item.memory}</p>
                    <p className="text-lg font-bold text-blue-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-900">Итого:</span>
                <span className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${getTotalPrice().toLocaleString()}
                </span>
              </div>
              <button onClick={() => {
                alert('Order placed successfully!');
              }} className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-2xl transition flex items-center justify-center">
                <span>Оформить заказ</span>
                <ChevronRight className="w-6 h-6 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartPage;
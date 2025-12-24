import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Truck, RefreshCw, Smartphone } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const navigate = useNavigate();

  const brands = ['all', ...new Set(PRODUCTS.map(p => p.brand))];
  
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
      <div className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Премиальные смартфоны</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">Официальные поставки • Гарантия производителя • Доставка по всему Узбекистану</p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Гарантия 2 года</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Бесплатная доставка</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5" />
              <span>Обмен 14 дней</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Поиск телефонов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-3 rounded-xl font-medium whitespace-nowrap transition shadow-sm ${
                  selectedBrand === brand
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {brand === 'all' ? 'Все бренды' : brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
            <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default HomePage;
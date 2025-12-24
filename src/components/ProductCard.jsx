import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold">{product.rating}</span>
        </div>
        <div className="absolute top-3 left-3 bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {product.targetAudience}
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs text-gray-500 mb-1 font-medium">{product.brand}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">От</div>
            <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.basePrice.toLocaleString()}
            </div>
          </div>
          <button className="flex items-center space-x-1 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition font-medium text-sm">
            <span>Подробнее</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center text-xs text-gray-500">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium">{product.rating}</span>
          <span className="mx-1">•</span>
          <span>{product.reviews} отзывов</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
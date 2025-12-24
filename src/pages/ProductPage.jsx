import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Star, Monitor, Cpu, Camera, Battery, Check, ShoppingCart } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';
import { PRODUCTS } from '../data/products';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedMemory, setSelectedMemory] = useState(product.memories[0]);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      color: selectedColor,
      memory: selectedMemory.size,
      price: selectedMemory.price,
      image: product.image
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 group"
        >
          <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition" />
          <span className="ml-1 font-medium">Назад к каталогу</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="bg-linear-to-br from-blue-50 to-purple-50 p-3 rounded-xl text-center">
                    <div className="text-xs font-medium text-gray-700">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                {product.targetAudience}
              </div>
              <div className="text-sm text-gray-500 mb-2">{product.brand}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6 text-lg">{product.fullDescription}</p>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <div className="w-2 h-6 bg-linear-to-b from-blue-600 to-purple-600 rounded-full mr-2"></div>
                  Выберите цвет
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-3 rounded-xl border-2 transition font-medium ${
                        selectedColor === color
                          ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-md'
                          : 'border-gray-300 hover:border-gray-400 bg-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <div className="w-2 h-6 bg-linear-to-b from-blue-600 to-purple-600 rounded-full mr-2"></div>
                  Выберите память
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.memories.map(memory => (
                    <button
                      key={memory.size}
                      onClick={() => setSelectedMemory(memory)}
                      className={`p-4 rounded-xl border-2 transition ${
                        selectedMemory.size === memory.size
                          ? 'border-blue-600 bg-linear-to-br from-blue-50 to-purple-50 shadow-md'
                          : 'border-gray-300 hover:border-gray-400 bg-white'
                      }`}
                    >
                      <div className="font-bold text-lg">{memory.size}</div>
                      <div className="text-sm text-gray-600">${memory.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-6 bg-linear-to-br from-gray-50 to-blue-50 rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Характеристики</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Monitor className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600 text-sm">Дисплей:</span>
                    <span className="ml-2 font-semibold">{product.specs.display}</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-600 text-sm">Процессор:</span>
                    <span className="ml-2 font-semibold">{product.specs.processor}</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-5 h-5 text-pink-600 mr-3" />
                    <span className="text-gray-600 text-sm">Камера:</span>
                    <span className="ml-2 font-semibold">{product.specs.camera}</span>
                  </div>
                  <div className="flex items-center">
                    <Battery className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-600 text-sm">Батарея:</span>
                    <span className="ml-2 font-semibold">{product.specs.battery}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Итоговая цена:</div>
                    <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${selectedMemory.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>✓ Гарантия 2 года</div>
                    <div>✓ Бесплатная доставка</div>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition flex items-center justify-center shadow-lg ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-6 h-6 mr-2" />
                      Добавлено в корзину!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-6 h-6 mr-2" />
                      Добавить в корзину
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;
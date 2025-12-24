import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Shield, Truck, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PhoneStore</span>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              Официальный магазин премиальных смартфонов. Гарантия производителя.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Apple iPhone</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Samsung Galaxy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Google Pixel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Xiaomi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">OnePlus</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">О компании</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Гарантия</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Возврат товара</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mt-0.5 mr-2 shrink-0 text-blue-400" />
                <div>
                  <div>+998 90 123 45 67</div>
                  <div>+998 71 234 56 78</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mt-0.5 mr-2 shrink-0 text-blue-400" />
                <a href="mailto:info@phonestore.uz" className="hover:text-blue-400 transition">
                  info@phonestore.uz
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-0.5 mr-2 shrink-0 text-blue-400" />
                <div>г. Ташкент, ул. Амира Темура, 100</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 PhoneStore. Все права защищены.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-gray-400">Безопасные платежи</span>
            <Truck className="w-4 h-4 text-blue-400 ml-4" />
            <span className="text-gray-400">Бесплатная доставка</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, createContext, useContext, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Smartphone, Cpu, Camera, Battery, Monitor, ChevronRight, Plus, Minus, Trash2, Check, CreditCard, Banknote, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Star, Heart, Shield, Truck, RefreshCw } from 'lucide-react';

// ============================================
// CONTEXT API - State Management
// ============================================

const AuthContext = createContext();
const CartContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('currentUser');
    const savedUsers = sessionStorage.getItem('users');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedUsers) setUsers(JSON.parse(savedUsers));
  }, []);

  const register = (name, email, password) => {
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email уже зарегистрирован' };
    }
    const newUser = { id: Date.now(), name, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
    return { success: true, message: 'Регистрация успешна' };
  };

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const userWithoutPassword = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
      setUser(userWithoutPassword);
      sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    return { success: false, message: 'Неверный email или пароль' };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(
      i => i.id === item.id && i.color === item.color && i.memory === item.memory
    );
    
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(i =>
        i.id === item.id && i.color === item.color && i.memory === item.memory
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem('cart');
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// ============================================
// MOCK DATA - 20 PHONES
// ============================================

const PRODUCTS = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    basePrice: 1299,
    image: 'iphone15.webp',
    rating: 4.9,
    reviews: 2847,
    targetAudience: 'Для профессионалов',
    description: 'Титановый корпус. Чип A17 Pro. Камера 48MP с 5x зумом',
    fullDescription: 'iPhone 15 Pro Max — вершина инноваций Apple. Легкий титановый корпус делает его самым прочным iPhone. Чип A17 Pro обеспечивает невероятную производительность для игр и профессиональных приложений.',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    memories: [
      { size: '256GB', price: 1299 },
      { size: '512GB', price: 1499 },
      { size: '1TB', price: 1799 }
    ],
    specs: {
      display: '6.7" Super Retina XDR',
      processor: 'A17 Pro',
      camera: '48MP + 12MP + 12MP',
      battery: '4422 mAh',
      os: 'iOS 17'
    },
    features: ['Титановый корпус', 'Dynamic Island', 'Режим Action', 'ProRes видео', 'USB-C 3.0']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    basePrice: 1199,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
    rating: 4.8,
    reviews: 1923,
    targetAudience: 'Для бизнеса',
    description: 'Galaxy AI. S Pen в комплекте. Камера 200MP',
    fullDescription: 'Galaxy S24 Ultra — флагман с искусственным интеллектом. S Pen интегрирован в корпус для максимальной продуктивности. Камера 200MP делает невероятно детализированные снимки.',
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow'],
    memories: [
      { size: '256GB', price: 1199 },
      { size: '512GB', price: 1379 },
      { size: '1TB', price: 1599 }
    ],
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      camera: '200MP + 50MP + 12MP + 10MP',
      battery: '5000 mAh',
      os: 'Android 14'
    },
    features: ['Galaxy AI', 'S Pen встроенный', 'Zoom 100x', 'Expert RAW', '45W зарядка']
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    basePrice: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    rating: 4.7,
    reviews: 1456,
    targetAudience: 'Для фотографов',
    description: 'Google Tensor G3. Лучшая камера с AI',
    fullDescription: 'Pixel 8 Pro создан для тех, кто ценит фотографию. AI от Google делает каждый снимок идеальным. Функция Magic Editor позволяет редактировать фото как профессионал.',
    colors: ['Obsidian', 'Porcelain', 'Bay'],
    memories: [
      { size: '128GB', price: 999 },
      { size: '256GB', price: 1099 },
      { size: '512GB', price: 1299 }
    ],
    specs: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G3',
      camera: '50MP + 48MP + 48MP',
      battery: '5050 mAh',
      os: 'Android 14'
    },
    features: ['Magic Editor', 'Best Take', 'Audio Magic Eraser', '7 лет обновлений', 'Термометр']
  },
  {
    id: 4,
    name: 'iPhone 15',
    brand: 'Apple',
    basePrice: 799,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    rating: 4.8,
    reviews: 3201,
    targetAudience: 'Для всех',
    description: 'Dynamic Island. Камера 48MP. USB-C',
    fullDescription: 'iPhone 15 — идеальный баланс возможностей и цены. Dynamic Island делает уведомления интуитивными. Камера 48MP делает потрясающие фото.',
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    memories: [
      { size: '128GB', price: 799 },
      { size: '256GB', price: 899 },
      { size: '512GB', price: 1099 }
    ],
    specs: {
      display: '6.1" Super Retina XDR',
      processor: 'A16 Bionic',
      camera: '48MP + 12MP',
      battery: '3349 mAh',
      os: 'iOS 17'
    },
    features: ['Dynamic Island', 'Ceramic Shield', 'USB-C', 'Emergency SOS', 'Face ID']
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold5',
    brand: 'Samsung',
    basePrice: 1799,
    image: 'images (2).jpg',
    rating: 4.6,
    reviews: 892,
    targetAudience: 'Для инноваторов',
    description: 'Складной флагман. Два экрана',
    fullDescription: 'Galaxy Z Fold5 — это будущее смартфонов. Складной дизайн позволяет носить планшет в кармане. Режим Flex Mode открывает новые возможности.',
    colors: ['Icy Blue', 'Phantom Black', 'Cream'],
    memories: [
      { size: '256GB', price: 1799 },
      { size: '512GB', price: 1919 },
      { size: '1TB', price: 2159 }
    ],
    specs: {
      display: '7.6" + 6.2" AMOLED',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 12MP + 10MP',
      battery: '4400 mAh',
      os: 'Android 13'
    },
    features: ['Складной дизайн', 'S Pen support', 'Flex Mode', 'Multitasking', 'IPX8']
  },
  {
    id: 6,
    name: 'OnePlus 12',
    brand: 'OnePlus',
    basePrice: 799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    rating: 4.7,
    reviews: 1234,
    targetAudience: 'Для геймеров',
    description: 'Snapdragon 8 Gen 3. Быстрая зарядка 100W',
    fullDescription: 'OnePlus 12 создан для максимальной производительности. Зарядка 100W заряжает телефон за 25 минут. Игровой режим обеспечивает плавный геймплей.',
    colors: ['Flowy Emerald', 'Silky Black'],
    memories: [
      { size: '256GB', price: 799 },
      { size: '512GB', price: 899 }
    ],
    specs: {
      display: '6.82" LTPO AMOLED 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      camera: '50MP + 64MP + 48MP',
      battery: '5400 mAh',
      os: 'OxygenOS 14'
    },
    features: ['100W зарядка', 'Hasselblad', 'Gaming Mode', 'Dolby Atmos', 'Cooling']
  },
  {
    id: 7,
    name: 'Xiaomi 14 Pro',
    brand: 'Xiaomi',
    basePrice: 899,
    image: 'jSvf6QGEOwVZKSZEa8kj.png',
    rating: 4.6,
    reviews: 987,
    targetAudience: 'Для фотографов',
    description: 'Leica оптика. Snapdragon 8 Gen 3',
    fullDescription: 'Xiaomi 14 Pro — профессиональная фотография в кармане. Сотрудничество с Leica обеспечивает превосходное качество оптики.',
    colors: ['Black', 'White', 'Titanium'],
    memories: [
      { size: '256GB', price: 899 },
      { size: '512GB', price: 999 }
    ],
    specs: {
      display: '6.73" AMOLED 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      camera: '50MP + 50MP + 50MP Leica',
      battery: '4880 mAh',
      os: 'MIUI 15'
    },
    features: ['Leica оптика', '120W зарядка', 'IP68', 'Pro Mode', 'RAW']
  },
  {
    id: 8,
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    basePrice: 999,
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500',
    rating: 4.8,
    reviews: 4521,
    targetAudience: 'Для профессионалов',
    description: 'Dynamic Island. Камера 48MP. Always-On',
    fullDescription: 'iPhone 14 Pro представил революционный Dynamic Island. Always-On дисплей показывает важную информацию без разблокировки.',
    colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
    memories: [
      { size: '128GB', price: 999 },
      { size: '256GB', price: 1099 },
      { size: '512GB', price: 1299 }
    ],
    specs: {
      display: '6.1" Super Retina XDR',
      processor: 'A16 Bionic',
      camera: '48MP + 12MP + 12MP',
      battery: '3200 mAh',
      os: 'iOS 17'
    },
    features: ['Dynamic Island', 'Always-On', 'ProRAW', 'Cinematic', 'Emergency SOS']
  },
  {
    id: 9,
    name: 'Samsung Galaxy S23',
    brand: 'Samsung',
    basePrice: 799,
    image: 'x.webp',
    rating: 4.7,
    reviews: 2156,
    targetAudience: 'Для всех',
    description: 'Компактный флагман. Snapdragon 8 Gen 2',
    fullDescription: 'Galaxy S23 — компактный, но мощный флагман. Идеально лежит в руке. Технология Nightography делает потрясающие ночные фото.',
    colors: ['Phantom Black', 'Cream', 'Green', 'Lavender'],
    memories: [
      { size: '128GB', price: 799 },
      { size: '256GB', price: 859 }
    ],
    specs: {
      display: '6.1" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 12MP + 10MP',
      battery: '3900 mAh',
      os: 'Android 14'
    },
    features: ['Компактный', 'Nightography', '8K видео', 'Wireless Share', 'Samsung DeX']
  },
  {
    id: 10,
    name: 'Google Pixel 8',
    brand: 'Google',
    basePrice: 699,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    rating: 4.6,
    reviews: 1789,
    targetAudience: 'Для всех',
    description: 'Tensor G3. Компактный и мощный',
    fullDescription: 'Pixel 8 — идеальный компактный смартфон. Все возможности AI от Google в удобном размере. 7 лет обновлений.',
    colors: ['Hazel', 'Obsidian', 'Rose'],
    memories: [
      { size: '128GB', price: 699 },
      { size: '256GB', price: 759 }
    ],
    specs: {
      display: '6.2" OLED 120Hz',
      processor: 'Google Tensor G3',
      camera: '50MP + 12MP',
      battery: '4575 mAh',
      os: 'Android 14'
    },
    features: ['Magic Eraser', 'Real Tone', '7 лет updates', 'Компактный', 'Чистый Android']
  },
  {
    id: 11,
    name: 'Xiaomi 13T Pro',
    brand: 'Xiaomi',
    basePrice: 649,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500',
    rating: 4.5,
    reviews: 876,
    targetAudience: 'Для активных',
    description: 'MediaTek Dimensity 9200+. 120W зарядка',
    fullDescription: 'Xiaomi 13T Pro — скорость во всём. Зарядка 120W заполняет батарею за 19 минут. Мощный процессор справляется с любыми задачами.',
    colors: ['Meadow Green', 'Alpine Blue', 'Black'],
    memories: [
      { size: '256GB', price: 649 },
      { size: '512GB', price: 749 }
    ],
    specs: {
      display: '6.67" AMOLED 144Hz',
      processor: 'Dimensity 9200+',
      camera: '50MP + 50MP + 12MP',
      battery: '5000 mAh',
      os: 'MIUI 14'
    },
    features: ['120W HyperCharge', 'Leica', 'Dolby Vision', 'IP68', '144Hz']
  },
  {
    id: 12,
    name: 'OnePlus 11',
    brand: 'OnePlus',
    basePrice: 699,
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500',
    rating: 4.6,
    reviews: 1432,
    targetAudience: 'Для энтузиастов',
    description: 'Hasselblad камера. Snapdragon 8 Gen 2',
    fullDescription: 'OnePlus 11 сочетает премиум-функции с доступной ценой. Hasselblad камера обеспечивает естественные цвета.',
    colors: ['Titan Black', 'Eternal Green'],
    memories: [
      { size: '128GB', price: 699 },
      { size: '256GB', price: 799 }
    ],
    specs: {
      display: '6.7" AMOLED 120Hz',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 48MP + 32MP',
      battery: '5000 mAh',
      os: 'OxygenOS 13'
    },
    features: ['Hasselblad', 'Alert Slider', '100W', 'Gaming Mode', 'Dolby']
  },
  {
    id: 13,
    name: 'Motorola Edge 40 Pro',
    brand: 'Motorola',
    basePrice: 599,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    rating: 4.4,
    reviews: 543,
    targetAudience: 'Для стиля',
    description: 'Snapdragon 8 Gen 2. Изогнутый 165Hz',
    fullDescription: 'Motorola Edge 40 Pro — стильный и мощный. Изогнутый дисплей 165Hz создаёт эффект бесконечности.',
    colors: ['Interstellar Black', 'Lunar Blue'],
    memories: [
      { size: '256GB', price: 599 },
      { size: '512GB', price: 699 }
    ],
    specs: {
      display: '6.67" pOLED 165Hz',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 50MP + 12MP',
      battery: '4600 mAh',
      os: 'Android 13'
    },
    features: ['165Hz', 'Изогнутый', '125W зарядка', 'IP68', 'Ready For']
  },
  {
    id: 14,
    name: 'OPPO Find X6 Pro',
    brand: 'OPPO',
    basePrice: 899,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
    rating: 4.5,
    reviews: 654,
    targetAudience: 'Для фотографов',
    description: 'Hasselblad. Три 50MP сенсора',
    fullDescription: 'OPPO Find X6 Pro — настоящий камерофон. Три 50MP сенсора обеспечивают одинаковое качество на всех камерах.',
    colors: ['Black', 'Brown'],
    memories: [
      { size: '256GB', price: 899 },
      { size: '512GB', price: 999 }
    ],
    specs: {
      display: '6.82" AMOLED 120Hz',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 50MP + 50MP',
      battery: '5000 mAh',
      os: 'ColorOS 13'
    },
    features: ['Hasselblad', 'MariSilicon X', '100W', 'IP68', 'LTPO']
  },
  {
    id: 15,
    name: 'Asus ROG Phone 7',
    brand: 'Asus',
    basePrice: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    rating: 4.8,
    reviews: 1876,
    targetAudience: 'Для геймеров',
    description: 'Игровой флагман. 165Hz. 6000mAh',
    fullDescription: 'ROG Phone 7 — абсолютный король мобильного гейминга. Дисплей 165Hz с временем отклика 1мс. Батарея 6000mAh.',
    colors: ['Phantom Black', 'Storm White'],
    memories: [
      { size: '256GB', price: 999 },
      { size: '512GB', price: 1099 }
    ],
    specs: {
      display: '6.78" AMOLED 165Hz',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 13MP + 5MP',
      battery: '6000 mAh',
      os: 'Android 13'
    },
    features: ['165Hz', 'AirTriggers 6', 'GameCool 7', '65W', 'ROG аксессуары']
  },
  {
    id: 16,
    name: 'Vivo X90 Pro',
    brand: 'Vivo',
    basePrice: 899,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    rating: 4.5,
    reviews: 732,
    targetAudience: 'Для фотографов',
    description: 'Zeiss оптика. MediaTek Dimensity 9200',
    fullDescription: 'Vivo X90 Pro — профессиональная фотография. Zeiss оптика с покрытием T* минимизирует блики.',
    colors: ['Legendary Black', 'Red'],
    memories: [
      { size: '256GB', price: 899 },
      { size: '512GB', price: 999 }
    ],
    specs: {
      display: '6.78" AMOLED 120Hz',
      processor: 'Dimensity 9200',
      camera: '50MP + 50MP + 12MP Zeiss',
      battery: '4870 mAh',
      os: 'Funtouch OS 13'
    },
    features: ['Zeiss', 'V2 ISP', '120W', 'IP68', 'Gimbal стабилизация']
  },
  {
    id: 17,
    name: 'Honor Magic5 Pro',
    brand: 'Honor',
    basePrice: 849,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    rating: 4.4,
    reviews: 567,
    targetAudience: 'Для бизнеса',
    description: 'Snapdragon 8 Gen 2. MagicOS 7.1',
    fullDescription: 'Honor Magic5 Pro — премиум-флагман с MagicOS 7.1. Мощный Snapdragon 8 Gen 2 обеспечивает высокую производительность.',
    colors: ['Meadow Green', 'Moonlight White', 'Black'],
    memories: [
      { size: '256GB', price: 849 },
      { size: '512GB', price: 949 }
    ],
    specs: {
      display: '6.81" OLED',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP + 50MP + 50MP',
      battery: '5100 mAh',
      os: 'MagicOS 7.1'
    },
    features: ['MagicOS', 'Triple камера', '66W', 'IP68', 'AI features']
  },
  {
    id: 18,
    name: 'Nothing Phone 2',
    brand: 'Nothing',
    basePrice: 599,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    rating: 4.5,
    reviews: 982,
    targetAudience: 'Для стиля',
    description: 'Уникальный Glyph интерфейс',
    fullDescription: 'Nothing Phone 2 — уникальный дизайн с Glyph интерфейсом. Светодиодные полоски на задней панели создают неповторимый стиль.',
    colors: ['White', 'Dark Gray'],
    memories: [
      { size: '128GB', price: 599 },
      { size: '256GB', price: 699 }
    ],
    specs: {
      display: '6.7" OLED',
      processor: 'Snapdragon 8+ Gen 1',
      camera: '50MP + 50MP',
      battery: '4700 mAh',
      os: 'Nothing OS 2.0'
    },
    features: ['Glyph Interface', 'Nothing OS', '45W', 'IP54', 'Unique Design']
  },
  {
    id: 19,
    name: 'Sony Xperia 1 V',
    brand: 'Sony',
    basePrice: 1199,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    rating: 4.6,
    reviews: 456,
    targetAudience: 'Для профессионалов',
    description: 'Для профессиональной фотографии',
    fullDescription: 'Sony Xperia 1 V — профессиональная фотография и видео. Технологии от камер Alpha встроены в смартфон.',
    colors: ['Black', 'Khaki Green'],
    memories: [
      { size: '256GB', price: 1199 },
      { size: '512GB', price: 1299 }
    ],
    specs: {
      display: '6.5" 4K OLED',
      processor: 'Snapdragon 8 Gen 2',
      camera: '48MP + 12MP + 12MP',
      battery: '5000 mAh',
      os: 'Android 13'
    },
    features: ['4K дисплей', 'Alpha камера', 'Pro режим', '30W', 'IP68']
  },
  {
    id: 20,
    name: 'Realme GT5 Pro',
    brand: 'Realme',
    basePrice: 549,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    rating: 4.4,
    reviews: 678,
    targetAudience: 'Для активных',
    description: 'Snapdragon 8 Gen 3. 240W зарядка',
    fullDescription: 'Realme GT5 Pro — невероятная скорость зарядки. 240W заряжает телефон за считанные минуты. Мощный Snapdragon 8 Gen 3.',
    colors: ['Green', 'White'],
    memories: [
      { size: '256GB', price: 549 },
      { size: '512GB', price: 649 }
    ],
    specs: {
      display: '6.78" AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      camera: '50MP + 50MP + 8MP',
      battery: '5400 mAh',
      os: 'Realme UI 5.0'
    },
    features: ['240W зарядка', 'Fast Performance', '144Hz', 'Gaming', 'RGB подсветка']
  }
];

// ============================================
// COMPONENTS
// ============================================

const Header = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PhoneStore</span>
            </button>
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
                <button
                  onClick={() => setCurrentPage('login')}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Войти
                </button>
                <button
                  onClick={() => setCurrentPage('register')}
                  className="hidden sm:block px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition"
                >
                  Регистрация
                </button>
              </>
            )}
            <button
              onClick={() => setCurrentPage('cart')}
              className="relative p-2.5 hover:bg-gray-100 rounded-xl transition group"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

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

const HomePage = ({ setCurrentPage, setSelectedProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const brands = ['all', ...new Set(PRODUCTS.map(p => p.brand))];
  
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

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
              className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
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
            <div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setCurrentPage('product');
              }}
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
      
      <Footer />
    </div>
  );
};

const ProductPage = ({ product, setCurrentPage }) => {
  const { addToCart } = useContext(CartContext);
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
          onClick={() => setCurrentPage('home')}
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
      
      <Footer />
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <AuthProvider>
      <CartProvider>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} setSelectedProduct={setSelectedProduct} />}
        {currentPage === 'product' && selectedProduct && <ProductPage product={selectedProduct} setCurrentPage={setCurrentPage} />}
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
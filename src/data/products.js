export const PRODUCTS = [
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
    image: 'images.jpg',
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
    image: '/SGOOPIX8P256GBUNLB_l.webp',
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
    image: 'images (1).jpg  ',
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
    image: '562ca042-df7a-42d8-a174-8105f1a33950.webp',
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
    image: 'image.webp',
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
    image: 'oneplus-11-black.500x500.jpg',
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
    image: 'Motorola Edge 40 Pro.webp',
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
    image: 'Oppo.jpg',
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
    image: 'Asus.jpeg',
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
    image: 'Vivo X90 Pro.webp',
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
    image: 'Honor Magic5 Pro.jpg',
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
    image: 'Nothing Phone 2.webp',
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
    image: 'Sony Xperia 1 V.png',
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
    image: 'Realme GT5 Pro.webp',
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

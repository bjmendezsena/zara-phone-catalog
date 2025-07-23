import { IProductDetails } from "@/features/product";

export const mockProductDetailsResponse: IProductDetails = {
  id: "GPX-8A",
  brand: "Google",
  name: "Pixel 8a",
  description:
    "Descubre Pixel 8a, creado por Google. Saca fotos magníficas con la Cámara Pixel. Haz más en menos tiempo con la IA de Google, como arreglar imágenes borrosas, filtrar llamadas y aprender cosas nuevas. Sus funciones de seguridad del más alto nivel ayudan a proteger tus datos. Y se ha diseñado para durar. Todo, a un precio excepcional.",
  basePrice: 459,
  rating: 4.7,
  specs: {
    screen: '6.1" OLED Actua',
    resolution: "2400 x 1080 pixels",
    processor: "Google Tensor G3",
    mainCamera: "64 MP + 13 MP",
    selfieCamera: "13 MP",
    battery: "4492 mAh",
    os: "Android",
    screenRefreshRate: "120 Hz",
  },
  colorOptions: [
    {
      name: "Obsidiana",
      hexCode: "#000000",
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.webp",
    },
    {
      name: "Porcelana",
      hexCode: "#F5F5F5",
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-porcelana.webp",
    },
    {
      name: "Celeste",
      hexCode: "#87CEEB",
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-celeste.webp",
    },
  ],
  storageOptions: [
    {
      capacity: "128 GB",
      price: 459,
    },
    {
      capacity: "256 GB",
      price: 509,
    },
  ],
  similarProducts: [
    {
      id: "XIA-R12",
      brand: "Xiaomi",
      name: "Redmi 12",
      basePrice: 117.29,
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-R12-sky-blue.webp",
    },
    {
      id: "APL-I15PM",
      brand: "Apple",
      name: "iPhone 15 Pro Max",
      basePrice: 1319,
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.webp",
    },
    {
      id: "OPP-R11F",
      brand: "OPPO",
      name: "Reno 11 F",
      basePrice: 269,
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R11F-verde.webp",
    },
    {
      id: "OPP-A18",
      brand: "OPPO",
      name: "A18",
      basePrice: 99,
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A18-azul-brillante.webp",
    },
    {
      id: "RLM-NOTE50",
      brand: "realme",
      name: "Note 50",
      basePrice: 99,
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/RLM-NOTE50-midnight-black.webp",
    },
    {
      id: "APL-IP13-128",
      brand: "Apple",
      name: "iPhone 13",
      basePrice: 619,
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.webp",
    },
  ],
};

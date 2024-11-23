import { useState } from "react";

const ProductPage = () => {
  // Resim listesini ve seçili resmi yönetmek için state
  const [selectedImage, setSelectedImage] = useState(
    "https://i0.shbdn.com/photos/24/73/31/lthmb_120624733181l.jpg" // Başlangıçta kapak resmi seçili
  );

  const thumbnails = [
    "https://i0.shbdn.com/photos/24/73/31/lthmb_120624733181l.jpg",
    "https://enkamakina.com/images/urun/4816147702-2.jpg",
    "https://www.istanbulmakina.com.tr/wp-content/uploads/2024/03/cnc-torna-tezgahinin-genel-ozellikleri-nelerdir-1024x576.jpg",
    "https://i0.shbdn.com/photos/95/39/53/lthmb_1205953953tue.jpg",
    "https://www.lidermakina.com/images/urunler/ldr-6g-1.jpg",
  ];

  const relatedProducts = [
    { id: 1, title: "CNC Milling Machine", image: "https://example.com/machine1.jpg" },
    { id: 2, title: "Industrial Laser Cutter", image: "https://example.com/machine2.jpg" },
    { id: 3, title: "3D Printer", image: "https://example.com/machine3.jpg" },
    { id: 4, title: "Hydraulic Press", image: "https://example.com/machine4.jpg" },
    { id: 5, title: "Assembly Line Robot", image: "https://example.com/machine5.jpg" },
    { id: 6, title: "Industrial Conveyor Belt", image: "https://example.com/machine6.jpg" },
  ];

  return (
    <div className="px-6 sm:px-12 md:px-24 lg:px-36 py-10">
      {/* Üst Bölüm: Büyük Resim ve Bilgiler */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sol Bölüm: Büyük Resim */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={selectedImage}
              alt="Selected CNC Lathe Machine"
            />
          </div>
          <div className="flex mt-4 gap-4 flex-wrap justify-center">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className={`cursor-pointer overflow-hidden rounded-lg border-2 ${
                  selectedImage === thumbnail
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(thumbnail)}
                style={{
                  width: "80px",
                  height: "80px",
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Bölüm: Ürün Bilgileri */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-gray-800">CNC Lathe Machine</h3>
          <ul className="text-gray-600 text-base space-y-2">
            <li><strong>Model:</strong> X2000</li>
            <li><strong>Max Processing Diameter:</strong> 200 mm</li>
            <li><strong>Max Processing Length:</strong> 500 mm</li>
            <li><strong>Spindle Speed:</strong> 3000 rpm</li>
            <li><strong>Precision:</strong> ±0.01 mm</li>
            <li><strong>Material Compatibility:</strong> Steel, Aluminum, Brass</li>
            <li><strong>Power Requirement:</strong> 380V, 50Hz</li>
            <li><strong>Dimensions:</strong> 2000x1500x1200 mm</li>
          </ul>
        </div>
      </div>

      {/* Açıklama Bölümü */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Product Description</h4>
        <p className="text-gray-600">
          This CNC lathe machine is designed for high-precision metalworking tasks. It is suitable
          for machining parts for automotive, aerospace, and general manufacturing industries.
          The X2000 model offers exceptional speed, accuracy, and durability, making it a versatile
          addition to any production line.
        </p>
      </div>

      {/* Sipariş Ver Bölümü */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Place Your Order</h4>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Ürün Miktarı */}
          <div className="flex flex-col w-full md:w-1/3">
            <label htmlFor="quantity" className="text-sm font-semibold text-gray-600 mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quantity"
              min="1"
            />
          </div>

          {/* Özel Not */}
          <div className="flex flex-col w-full md:w-2/3">
            <label htmlFor="note" className="text-sm font-semibold text-gray-600 mb-2">
              Special Note (Optional)
            </label>
            <textarea
              id="note"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Add any special instructions for the order"
            ></textarea>
          </div>
        </div>

        {/* Sipariş Ver Butonu */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Place Order
          </button>
        </div>
      </div>

      {/* Diğer Ürünler Bölümü */}
      <div className="mt-16">
        <h4 className="text-2xl font-bold text-gray-800 mb-6">Other Products</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <div className="h-32 w-full bg-gray-200 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold text-gray-800">
                {product.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;





import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import image from "../../assets/pngegg.png";

const Home = () => {

  const navigate = useNavigate();

  // Sayfa içi kaydırma işlevi
  const scrollToElement = (id) => {
    navigate('/'); // Burada "/home" gibi istediğiniz sayfayı yönlendirin
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 0); // Sayfa yüklendikten sonra kaydırma işlemi
  };

  return (
    <div>
      <div className="min-h-screen px-6 sm:px-12 md:px-24 lg:px-36 py-10 flex flex-col md:flex-row items-center bg-[#121212]">
        <div className="flex flex-col justify-center gap-y-8 text-center md:text-left text-white flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug">
            Discover The Power of Industrial
          </h1>
          <div>
            <a 
            className='text-red-700 hover:underline hover:text-red-800 transition-all'
            href="#products" onClick={(e) => {
              e.preventDefault(); // Sayfa yenilenmesini engelle
              scrollToElement('products');
              }}
            >
              Explore Now
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center mt-10 md:mt-0 flex-1">
          <div className="relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px] flex justify-center items-center rounded-full bg-red-700 opacity-50">
            <img
              className="absolute h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] object-cover"
              src={image}
              alt="Industrial Machine"
            />
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-gray-600"></div>

      <div className="py-10 px-6 sm:px-12 md:px-24 lg:px-36 min-h-screen bg-slate-100">
        <div className="flex justify-center text-5xl"><h2 id="products">Products</h2></div>
        <div className="mt-16 flex flex-col md:flex-row p-6 gap-6">
        <div className="flex items-start flex-col md:w-1/2">
    <h4 className="text-3xl font-bold text-gray-800 mb-3">
      CNC Lathe Machine
    </h4>
    <p className="text-gray-600 text-base mb-4">
      A computer numerical control lathe used for high-precision metalworking operations. It can perform cutting, milling, drilling, and other processes automatically at high speeds on various materials. Offers a precision of up to 0.01 mm.
    </p>
    <Link
      to="/product"
      className="text-red-500 hover:underline hover:text-red-800 transition duration-500"
    >
      Detailed Information
    </Link>
  </div>
  {/* Image for CNC Lathe Machine */}
  <div className="md:w-1/2 flex justify-center items-center">
    <img
      className="w-full h-[300px] object-cover rounded-lg"
      src="https://ideacdn.net/idea/gv/53/myassets/products/432/cnc-torna-tezgahi-6.jpg?revision=1697143329"
      alt="CNC Lathe Machine"
    />
  </div>
</div>

{/* CNC Milling Machine */}
<div className="mt-16 flex flex-col md:flex-row p-6 gap-6">
  <div className="md:w-1/2 flex justify-center items-center">
    <img
      className="w-full h-[300px] object-cover rounded-lg"
      src="https://www.amedm.co.uk/wp-content/uploads/2022/04/DCX32-5Si-angle-web.png"
      alt="CNC Milling Machine"
    />
  </div>
  <div className="flex flex-col items-start md:w-1/2">
    <h4 className="text-3xl font-bold text-gray-800 mb-3">
      CNC Milling Machine
    </h4>
    <p className="text-gray-600 text-base mb-4">
      A CNC milling machine designed for precision metal shaping and cutting. It can create intricate designs by removing material from solid blocks of metal or other materials. Equipped with high-speed spindles and advanced control systems for unmatched accuracy and efficiency in industrial applications.
    </p>
    <Link
      to="/product"
      className="text-red-500 hover:underline hover:text-red-800 transition duration-500"
    >
      Detailed Information
    </Link>
  </div>
</div>

{/* Hydraulic Press Machine */}
<div className="mt-16 flex flex-col md:flex-row p-6 gap-6">
  <div className="flex flex-col items-start md:w-1/2">
    <h4 className="text-3xl font-bold text-gray-800 mb-3">
      Hydraulic Press Machine
    </h4>
    <p className="text-gray-600 text-base mb-4">
      A hydraulic press machine used for metal forming, punching, and compressing operations. It applies high pressure to mold or cut materials into desired shapes, ensuring precision and reliability. Essential for manufacturing industries dealing with large-scale metalwork.
    </p>
    <Link
      to="/product"
      className="text-red-500 hover:underline hover:text-red-800 transition duration-500"
    >
      Detailed Information
    </Link>
  </div>
  {/* Image for Hydraulic Press Machine */}
  <div className="md:w-1/2 flex justify-center items-center">
    <img
      className="w-full h-[300px] object-cover rounded-lg"
      src="https://www.chestermachinetools.com/wp-content/uploads/2020/01/HPHD-1.png"
      alt="Hydraulic Press Machine"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;

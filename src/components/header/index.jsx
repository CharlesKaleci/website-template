import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Header = () => {

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

  return(
    <header className="bg-black text-white px-6 sm:px-12 md:px-24 lg:px-36 py-8">
  <div className="flex flex-row justify-between">
    <div className="text-2xl font-bold">
      {/* Logo kısmı, Link ile yönlendiriliyor */}
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
    </div>
    <div className="flex items-center justify-center">
      <ul className="flex gap-x-4 text-sm text-center">
        {/* Her bir menü elemanı için Link kullanıyoruz */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a 
          href="#products" onClick={(e) => {
            e.preventDefault(); // Sayfa yenilenmesini engelle
            scrollToElement('products');
            }}
          >
            Products
          </a>
        </li>
        <li>
          <Popover className="relative">
            <PopoverButton className="outline-none">Contact</PopoverButton>
            <PopoverPanel anchor="bottom" className="mt-3 flex flex-col gap-2 items-center bg-black border border-gray-500 text-white rounded-md">
              <a className='w-full h-full p-2 flex items-center justify-center text-xs hover:bg-[#16181C] overflow-hidden transition-colors' href="/analytics">Facebook</a>
              <a className='w-full h-full p-2 flex items-center justify-center text-xs hover:bg-[#16181C] overflow-hidden transition-colors' href="/engagement">Twitter</a>
              <a className='w-full h-full p-2 flex items-center justify-center text-xs hover:bg-[#16181C] overflow-hidden transition-colors' href="/security">Instagram</a>
              <a className='w-full h-full p-2 flex items-center justify-center text-xs hover:bg-[#16181C] overflow-hidden transition-colors' href="/integrations">LinkedIn</a>
            </PopoverPanel>
          </Popover>
        </li>
      </ul>
    </div>
  </div>
</header>
  )
}

export default Header
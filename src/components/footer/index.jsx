const Footer = () => {
  return(
    <footer>
  <div className="px-6 sm:px-12 md:px-24 lg:px-36 py-10 flex flex-col md:flex-row justify-between bg-[#121212] text-slate-300 text-xs gap-y-6 md:gap-y-0">
    {/* Quick Links Section */}
    <div>
      <ul className="flex flex-col gap-y-2">
        <li className="text-base text-white">Quick Links</li>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
      </ul>
    </div>

    {/* Connect With Us Section */}
    <div>
      <ul className="flex flex-col gap-y-2">
        <li className="text-base text-white">Connect with Us</li>
        <li>Facebook</li>
        <li>X</li>
        <li>LinkedIn</li>
        <li>Instagram</li>
      </ul>
    </div>

    {/* Logo and Copyright Section */}
    <div className="flex flex-col gap-y-2">
      <div className="text-2xl font-bold">LOGO</div>
      <span className="md:text-left">
        © 2024 firma ismi, Inc. <br /> All rights reserved.
      </span>
    </div>
  </div>
</footer>

  )
}

export default Footer
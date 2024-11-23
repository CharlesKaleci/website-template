import Footer from "../components/footer"
import Header from "../components/header"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom"
const MainLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <div className="flex flex-col min-h-screen">
      <div>
        <Header/>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
import { SideBar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../components/loader";

export function DashboardLayout() {
  const navigation = useNavigation();
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Au début d'un changement de page, on cache tout
    setShowContent(false);

    // Si navigation en cours : afficher loader direct
    if (navigation.state === "loading"){
        return;
    }else{
            // Sinon (idle), attendre un peu avant d'afficher
        const delay = setTimeout(() => {
        setShowContent(true);
        }, 400); // ajustable
        return () => clearTimeout(delay);
    }

  }, [location.pathname, navigation.state]); //clé : déclenche à CHAQUE navigation interne

  return (
    <div className="DashBoardlayout h-screen flex">
      <SideBar />
      <div className="main flex flex-col flex-1 ml-60 w-full">
        <Header />
        <div className="body mt-15 relative ">
          {!showContent && <Loader />}
          {showContent && <Outlet key={location.pathname} />}
        </div>
      </div>
    </div>
  );
}

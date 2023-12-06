import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import ContactUs from "@/scenes/contactUs";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Footer from "./scenes/footer";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.screenY !== 0) {
        setIsTopofPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      {/* app */}
      <Navbar
        isTopofPage={isTopofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;

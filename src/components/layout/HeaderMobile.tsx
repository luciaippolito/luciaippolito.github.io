import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

const HeaderMobile = () => {
  const { t } = useTranslation()
  const currentLocation = useLocation();

  // i18n always returns an object, even if it's an array; so 
  // we gotta convert from object to array.
  const links = t("header.navbar", { returnObjects: true });
  const pageLinks = Array.isArray(links) ? links : Object.values(links); 

  // Check if the menu is opened.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Page Button.
  function navbarButton(text: string, link: string) {
    const active = currentLocation.pathname === link;
    return (
      <Link to={link}>
        <div
          className={`mt-3 p-2 inline-flex w-full text-center text-2xl font-fredoka text-white
                    ${active ? "bg-lucia-brightred" : "bg-lucia-brighterred"}`}
        >
          {text}
        </div>
      </Link>
    );
  };

  // Create buttons for every page from JSON.
  function createButtons() {
    return (
      <div className="animate__animated animate__fadeInDown animate__faster 
                      flex flex-wrap flex-col p-4">
        {/* Create buttons for every link. */}
        {pageLinks.map((link, index) => (
          <div key={index}>
            { navbarButton(link.text, link.link) }
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="xl:hidden fixed top-0 left-0 w-full bg-lucia-red z-30">
      {/* Navbar */}
      <div className="flex justify-between items-center p-3">
        <button
          onClick={handleToggleMenu}
          className="text-2xl font-bold text-white"
        >
          ☰
        </button>

        <p className="text-3xl font-walkaway text-white">{t("header.name")}</p>
      </div>

      {/* Page buttons */}
      {isMenuOpen && (      
        createButtons()
      )}
    </div>
  )
}

export default HeaderMobile
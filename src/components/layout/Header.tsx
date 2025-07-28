import { useTranslation } from "react-i18next"
import { Link } from "react-router"

const Header = () => {
  const { t } = useTranslation()

  // Get all navbar entries
  const navbarEntries = t("header.navbar", { returnObjects: true }) as Record<
    string,
    { text: string; link: string }
  >;

  // Actual navbar.
  return (
    <header className="text-white bg-lucia-red">
      <div className="pt-10 pb-10 pl-7 pr-7 hidden xl:flex justify-between items-center
                      bg-[url(/bg/headerBG.png)] bg-no-repeat bg-contain">
        {/* Logo */}
        <p className="font-bold text-6xl">
          { t("header.name") }
        </p>

        {/* Links */}
        <nav>
          {/* Link button */}
          {Object.entries(navbarEntries).map(([key, { text, link }]) => (
            <Link
              key={key}
              to={link}
              className="p-2 ml-5 text-2xl hover:font-bold rounded-xl transition-all hover:rounded-2xl
                         bg-lucia-brightred hover:bg-lucia-brighterred active:bg-lucia-brightred
                         hover:shadow-[0px_0px_15px_rgba(255,255,255,0.30)]"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
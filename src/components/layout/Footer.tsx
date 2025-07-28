import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-7 text-center text-lg text-white bg-lucia-red ">
      <p>&copy;{ currentYear } { t("footer.name") } <strong>{t("footer.copy")}</strong></p>
      <p>{ t("footer.location") }</p>
    </footer>
  )
}

export default Footer
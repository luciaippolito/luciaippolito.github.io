import luciaPortrait from "../assets/luciaPortrait.png"

import 'animate.css';
import { useTranslation } from "react-i18next"
import Page from "../components/layout/Page"
import Articles from "../components/hompage/Articles"
import Promos from "../components/hompage/Promos";
import Reports from "../components/hompage/Reports";
import Radio from "../components/hompage/Radio";
import Produced from "../components/hompage/Produced";

const Homepage = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {/* Homepage introduction section */}
      <div className="m-7 mt-30 flex flex-wrap flex-col xl:flex-nowrap xl:flex-row">
        {/* Lucia Image */}
        <div className="animate__animated animate__fadeInDown">
          <img className="w-[250px] m-auto xl:w-[300px]" src={luciaPortrait} />
        </div>

        {/* Text */}
        <div className="flex flex-col grow items-center justify-center
                        animate__animated animate__fadeInDown">
          {/* Hello */}
          <p className="mb-5 text-3xl font-bold">{ t("homepage.intro.hello") }</p>
          
          {/* Bullet Points */}
          <div>
            <div className="hidden xl:flex items-center">
              <div className="text-center">
                <p className="text-6xl">🎓</p>
                <p className="text-[20px]">{ t("homepage.intro.uni") }</p>
              </div>
              <p className="ml-3 mr-3 text-2xl">&bull;</p>
              <div className="text-center">
                <p className="text-6xl">🏛️</p>
                <p className="text-[20px]">{ t("homepage.intro.communication") }</p>
              </div>
              <p className="ml-3 mr-3 text-2xl">&bull;</p>
              <div className="text-center">
                <p className="text-6xl">🎥</p>
                <p className="text-[20px]">{ t("homepage.intro.production") }</p>
              </div>
            </div>

            <div className="xl:hidden mt-10 mb-10 text-center text-[22px]">
              <p>🎓 { t("homepage.intro.uni") }</p>
              <p>&bull;</p>
              <p>🏛️ { t("homepage.intro.communication") }</p>
              <p>&bull;</p>
              <p>🎥 { t("homepage.intro.production") }</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 font-bold text-lg text-center xl:text-left">{ t("homepage.intro.desc") }</p>
        </div>
      </div>

      {/* Articles */}
      <div className="m-5 mt-30">
        <h1 className="font-bold text-center text-5xl text-lucia-brighterred " >{ t("homepage.articles.title") }</h1>
        <p className="mt-2 text-center">{ t("homepage.articles.desc") }</p>
        <Articles />
      </div>

      {/* Reports */}
      <div className="m-5 mt-30">
        <h1 className="font-bold text-center text-5xl text-lucia-brighterred " >{ t("homepage.reports.title") }</h1>
        <p className="mt-2 text-center m-auto max-w-[950px]">{ t("homepage.reports.desc") }</p>
        <Reports />
      </div>

      {/* Promo Videos */}
      <div className="m-5 mt-30">
        <h1 className="font-bold text-center text-5xl text-lucia-brighterred " >{ t("homepage.videospromo.title") }</h1>
        <p className="mt-2 text-center">{ t("homepage.videospromo.desc") }</p>
        <Promos />
      </div>

      {/* Produced Videos */}
      <div className="m-5 mt-30">
        <h1 className="font-bold text-center text-5xl text-lucia-brighterred " >{ t("homepage.videosprod.title") }</h1>
        <p className="mt-2 text-center">{ t("homepage.videosprod.desc") }</p>
        <Produced />
      </div>

      {/* Radio */}
      <div className="m-5 mt-30">
        <h1 className="font-bold text-center text-5xl text-lucia-brighterred " >{ t("homepage.radio.title") }</h1>
        <p className="mt-2 text-center">{ t("homepage.radio.desc") }</p>
        <Radio />
      </div>
    </Page>
  )
}

export default Homepage
import LinkedinLogo from "../assets/social/linkedin.png"
import GmailLogo from "../assets/social/gmail.webp"

import { useTranslation } from "react-i18next";
import Carousel from "../components/about/Carousel"
import Page from "../components/layout/Page"

const About = () => {
  const { t } = useTranslation()

  const imageList = [
    "/about/1.png",
    "/about/2.png",
    "/about/3.png",
    "/about/4.png",
    "/about/5.png",
    "/about/6.png",
    "/about/7.png",
    "/about/8.png",
    "/about/9.png",
    "/about/10.png",
    "/about/11.png",
    "/about/12.png",
    "/about/13.png",
    "/about/14.png",
    "/about/15.png",
    "/about/16.png"
  ];

  return (
    <Page>
      <div className="m-3">
        <Carousel images={imageList}/>
      </div>

      <div className="m-7">
        <p className="mb-5 text-3xl text-center font-bold">{ t("about.title") }</p>
        <p className="max-w-[950px] text-center">{ t("about.text") }</p>

        <p className="mt-30 text-2xl text-center"><strong>{ t("about.social") }</strong></p>

        <div className="m-auto mt-5 max-w-[950px] flex gap-4 justify-center">
          <a href="https://www.linkedin.com/in/aluciaippolito/" target="_blank">
            <img className="w-[100px] hover:brightness-120 hover:cursor-pointer transition-all" src={LinkedinLogo} />
          </a>
          <a href="mailto:contato.luciaippolito@gmail.com" target="_blank">
            <img className="w-[100px] hover:brightness-120 hover:cursor-pointer transition-all" src={GmailLogo} />
          </a>
        </div>
      </div>
    </Page>
  )
}

export default About
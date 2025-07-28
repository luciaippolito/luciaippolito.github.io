import 'animate.css';

// Import promos from JSON
import promos from "../../content/promos.json"

// Identify the logos from different news portals 
import ucpelLogo from "../../assets/logos/ucpel.png"
const logos: Record<string, string> = {
  ucpel: ucpelLogo
};

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Promos = () => {
  const { t } = useTranslation()

  // Number of currently displayed promos &
  // how many promos are in the JSON.
  const [numberOfPromos, setNumberOfPromos] = useState(9)
  const howManyPromos = promos.length

  // More promos button action
  const morePromosButtonRef = useRef<HTMLDivElement | null>(null)
  const morePromosButtonAction = () => {
    setNumberOfPromos(numberOfPromos + 5);

    // Only scroll on screens smaller than "xl" (1280px)
    const isXL = window.matchMedia("(min-width: 1280px)").matches;

    // Scroll to button smoothly
    // Delay scroll to ensure new articles are rendered first
    if (isXL) {
        setTimeout(() => {
        morePromosButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100) // Adjust timing if needed
    }
  }

  return (
    <div className="xl:m-10 grid grid-cols-2 xl:grid-cols-5 xl:gap-4"> {/* Create a grid of news promos */}
    
      {/* Create individual news promos from JSON */}
      {promos.slice(0, numberOfPromos).map((promo) => (
        <a key={"promo"+promo.id} href={promo.link} target="blank">
          <div 
               className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                          animate__animated animate__fadeIn animate__fast"
               style={{backgroundImage: `url("/thumbs/promos/${promo.id}.png")`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={promo.portal ? logos[promo.portal] : ucpelLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {promo.title}
            </p>
          </div>
        </a>
      ))}

      {/* More Promos Button */}
      { numberOfPromos < howManyPromos && (
        <div className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                        text-center items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred hover:bg-lucia-red"
            ref={ morePromosButtonRef }
            onClick={ morePromosButtonAction }>
          <p className="text-white text-2xl">{ t("homepage.videospromo.more") }</p>
        </div>
      )}

    </div>
  )
}

export default Promos
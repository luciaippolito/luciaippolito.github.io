import 'animate.css';

// Import produced from JSON
import produced from "../../content/produced.json"

// Identify the logos from different news portals 
import pelotasLogo from "../../assets/logos/pelotas.png"
const logos: Record<string, string> = {
  camara: pelotasLogo
};

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Produced = () => {
  const { t } = useTranslation()

  // Number of currently displayed produced &
  // how many produced are in the JSON.
  const [numberOfProduced, setNumberOfProduced] = useState(9)
  const howManyProduced = produced.length

  // More produced button action
  const moreProducedButtonRef = useRef<HTMLDivElement | null>(null)
  const moreProducedButtonAction = () => {
    setNumberOfProduced(numberOfProduced + 5);

    // Only scroll on screens smaller than "xl" (1280px)
    const isXL = window.matchMedia("(min-width: 1280px)").matches;

    // Scroll to button smoothly
    // Delay scroll to ensure new articles are rendered first
    if (isXL) {
        setTimeout(() => {
        moreProducedButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100) // Adjust timing if needed
    }
  }

  return (
    <div className="xl:m-10 grid grid-cols-2 xl:grid-cols-5 xl:gap-4"> {/* Create a grid of news produced */}
    
      {/* Create individual news produced from JSON */}
      {produced.slice(0, numberOfProduced).map((prod) => (
        <a key={"produced"+prod.id} href={prod.link} target="blank">
          <div 
               className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                          animate__animated animate__fadeIn animate__fast"
               style={{backgroundImage: `url("/thumbs/prod/${prod.id}.png")`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={prod.portal ? logos[prod.portal] : pelotasLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {prod.title}
            </p>
          </div>
        </a>
      ))}

      {/* More Produced Button */}
      { numberOfProduced < howManyProduced && (
        <div className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                        text-center items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred hover:bg-lucia-red"
            ref={ moreProducedButtonRef }
            onClick={ moreProducedButtonAction }>
          <p className="text-white text-2xl">{ t("homepage.videosprod.more") }</p>
        </div>
      )}

    </div>
  )
}

export default Produced
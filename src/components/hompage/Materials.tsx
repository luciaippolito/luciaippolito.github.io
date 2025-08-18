import 'animate.css';

// Import materials from JSON
import materials from "../../content/materials.json"

// Identify the logos from different news portals 
import pelotasLogo from "../../assets/logos/pelotas.png"
import ucpelLogo from "../../assets/logos/ucpel.png"
const logos: Record<string, string> = {
  camara: pelotasLogo,
  ucpel: ucpelLogo
};

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Materials = () => {
  const { t } = useTranslation()

  // Number of currently displayed materials &
  // how many materials are in the JSON.
  const [numberOfMaterials, setNumberOfMaterials] = useState(9)
  const howManyMaterials = materials.length

  // More materials button action
  const moreMaterialsButtonRef = useRef<HTMLDivElement | null>(null)
  const moreMaterialsButtonAction = () => {
    setNumberOfMaterials(numberOfMaterials + 5);

    // Only scroll on screens smaller than "xl" (1280px)
    const isXL = window.matchMedia("(min-width: 1280px)").matches;

    // Scroll to button smoothly
    // Delay scroll to ensure new articles are rendered first
    if (isXL) {
        setTimeout(() => {
        moreMaterialsButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100) // Adjust timing if needed
    }
  }

  return (
    <div className="xl:m-10 grid grid-cols-2 xl:grid-cols-5 xl:gap-4"> {/* Create a grid of news materials */}
    
      {/* Create individual news materials from JSON */}
      {materials.slice(0, numberOfMaterials).map((material) => (
        <a key={"materials"+material.id} href={material.link} target="blank">
          <div 
               className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                          animate__animated animate__fadeIn animate__fast"
               style={{backgroundImage: `url("/thumbs/materials/${material.id}.png")`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={material.portal ? logos[material.portal] : pelotasLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {material.title}
            </p>
          </div>
        </a>
      ))}

      {/* More Materials Button */}
      { numberOfMaterials < howManyMaterials && (
        <div className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                        text-center items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred hover:bg-lucia-red"
            ref={ moreMaterialsButtonRef }
            onClick={ moreMaterialsButtonAction }>
          <p className="text-white text-2xl">{ t("homepage.videosmaterial.more") }</p>
        </div>
      )}

    </div>
  )
}

export default Materials
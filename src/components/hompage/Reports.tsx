import 'animate.css';

// Import reports from JSON
import reports from "../../content/reports.json"

// Identify the logos from different news portals 
import ucpelLogo from "../../assets/logos/ucpel.png"
const logos: Record<string, string> = {
  ucpel: ucpelLogo
};

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Reports = () => {
  const { t } = useTranslation()

  // Number of currently displayed reports &
  // how many reports are in the JSON.
  const [numberOfReports, setNumberOfReports] = useState(9)
  const howManyReports = reports.length

  // More reports button action
  const moreReportsButtonRef = useRef<HTMLDivElement | null>(null)
  const moreReportsButtonAction = () => {
    setNumberOfReports(numberOfReports + 5);

    // Only scroll on screens smaller than "xl" (1280px)
    const isXL = window.matchMedia("(min-width: 1280px)").matches;

    // Scroll to button smoothly
    // Delay scroll to ensure new articles are rendered first
    if (isXL) {
      setTimeout(() => {
        moreReportsButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100) // Adjust timing if needed
    }
  }

  return (
    <div className="xl:m-10 grid grid-cols-2 xl:grid-cols-5 xl:gap-4"> {/* Create a grid of news reports */}
    
      {/* Create individual news reports from JSON */}
      {reports.slice(0, numberOfReports).map((report) => (
        <a key={"report"+report.id} href={report.link} target="blank">
          <div 
               className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                          animate__animated animate__fadeIn animate__fast"
               style={{backgroundImage: `url("${report.img}")`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={report.portal ? logos[report.portal] : ucpelLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {report.title}
            </p>
          </div>
        </a>
      ))}

      {/* More Reports Button */}
      { numberOfReports < howManyReports && (
        <div className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                        text-center items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred hover:bg-lucia-red"
            ref={ moreReportsButtonRef }
            onClick={ moreReportsButtonAction }>
          <p className="text-white text-2xl">{ t("homepage.videosprod.more") }</p>
        </div>
      )}

    </div>
  )
}

export default Reports
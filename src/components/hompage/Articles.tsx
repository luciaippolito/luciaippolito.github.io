import 'animate.css';

// Import articles from JSON
import articles from "../../content/articles.json"

// Identify the logos from different news portals 
import ucpelLogo from "../../assets/logos/ucpel.png"
const logos: Record<string, string> = {
  ucpel: ucpelLogo
};

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Articles = () => {
  const { t } = useTranslation()

  // Number of currently displayed articles &
  // how many articles are in the JSON.
  const [numberOfArticles, setNumberOfArticles] = useState(9)
  const howManyArticles = articles.length

  // More articles button action
  const moreArticlesButtonRef = useRef<HTMLDivElement | null>(null)
  const moreArticlesButtonAction = () => {
    setNumberOfArticles(numberOfArticles + 5);

    // Only scroll on screens smaller than "xl" (1280px)
    const isXL = window.matchMedia("(min-width: 1280px)").matches;

    // Scroll to button smoothly
    // Delay scroll to ensure new articles are rendered first
    if (isXL) {
      setTimeout(() => {
        moreArticlesButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100)
    }
  }

  return (
    <div className="xl:m-10 grid grid-cols-2 xl:grid-cols-5 xl:gap-4"> {/* Create a grid of news articles */}
    
      {/* Create individual news articles from JSON */}
      {articles.slice(0, numberOfArticles).map((article) => (
        <a key={"article"+article.id} href={article.link} target="blank">
          <div 
               className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                          animate__animated animate__fadeIn animate__fast"
               style={{backgroundImage: `url(${article.img})`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={article.portal ? logos[article.portal] : ucpelLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {article.title}
            </p>
          </div>
        </a>
      ))}

      {/* More Articles Button */}
      { numberOfArticles < howManyArticles && (
        <div className="flex flex-col m-1 xl:m-3 xl:w-[250px] h-[250px]
                        text-center items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred hover:bg-lucia-red"
            ref={ moreArticlesButtonRef }
            onClick={ moreArticlesButtonAction }>
          <p className="text-white text-2xl">{ t("homepage.articles.more") }</p>
        </div>
      )}

    </div>
  )
}

export default Articles
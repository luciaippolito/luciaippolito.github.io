import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Page from "../components/layout/Page"

const Gallery = () => {
  const imageList = [
    "/about/1.png",  "/about/2.png",  "/about/3.png",  "/about/4.png",  "/about/5.png",
    "/about/6.png",  "/about/7.png",  "/about/8.png",  "/about/9.png",  "/about/10.png",
    "/about/11.png", "/about/12.png", "/about/13.png", "/about/14.png", "/about/15.png",
    "/about/16.png", "/about/17.jpg", "/about/18.jpg", "/about/19.jpg", "/about/20.jpg", 
    "/about/21.jpg", "/about/22.jpg", "/about/23.jpg", "/about/24.jpg", "/about/25.jpg",
    "/about/26.jpg"
  ];

 

  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [shuffledImageList, setShuffledImageList] = useState<string[]>([]);

  // Shuffle only once on mount
  useEffect(() => {
    const shuffled = [...imageList].sort(() => Math.random() - 0.5);
    setShuffledImageList(shuffled);
  }, []);

  // If not yet shuffled, don’t render
  if (shuffledImageList.length === 0) return null

  return (
    <Page>
      <div className="m-7 mt-30 xl:mt-10">
        {/* Text */}
        <h1 className="mb-5 text-4xl text-center">{ t("gallery.title") }</h1>
        <div className="max-w-[950px] mb-10 m-auto">
          <p className="text-center">{ t("gallery.text") }</p>
        </div>

        {/* Images */}
        <div className="max-w-[1400px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 m-auto">
          {/* Generate images from Array*/}
          {shuffledImageList.map((src, index) => (
              <div key={index}
                  className="flex flex-col m-1 xl:max-w-[280px] h-[272px]
                              hover:cursor-pointer hover:underline decoration-white
                              hover:brightness-110 transition-all bg-cover bg-center
                              hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                              animate__animated animate__fadeIn animate__fast"
                  style={{backgroundImage: `url(${src})`}}
                  onClick={() => setSelectedImage(index)}>
              </div>
          ))}
        </div>

        {/* Fullscreen Overlay Modal */}
        {selectedImage !== null && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)} // clicking background closes modal
          >
            {/* MODAL CONTENT that prevents background closing */}
            <div
              className="relative max-w-[100%] max-h-[100%] xl:max-w-[90%] xl:max-h-[90%]"
              onClick={(e) => e.stopPropagation()} // clicking image doesn't close
            >
              {/* IMAGE */}
              <img
                src={shuffledImageList[selectedImage]}
                alt={`Image ${selectedImage + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-md"
              />
            </div>

            {/* ✕ CLOSE button (fixed to screen) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-0 right-5 text-white text-[90px] p-2 hover:cursor-pointer hover:text-red-400 z-[999]"
              aria-label="Close image"
            >
              ×
            </button>

            {/* ‹ PREVIOUS button (if not first image) */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="fixed top-1/2 left-5 transform -translate-y-1/2 text-white text-[90px] p-2 hover:text-lucia-brightred hover:cursor-pointer z-[999]"
              >
                ‹
              </button>
            )}

            {/* › NEXT button (if not last image) */}
            {selectedImage < shuffledImageList.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="fixed top-1/2 right-5 transform -translate-y-1/2 text-white text-[90px] p-2 hover:text-lucia-brightred hover:cursor-pointer z-[999]"
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>
    </Page>
  )
}

export default Gallery
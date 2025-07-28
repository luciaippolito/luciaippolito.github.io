import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative m-10 mt-30 xl:mt-10 max-w-[900px] mx-auto overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[currentIndex]}
        className="w-full object-cover transition duration-500"
        alt={`Slide ${currentIndex + 1}`}
      />

      {/* Prev/Next Buttons */}
      <button
        onClick={prevImage}
        className="p-2 absolute top-1/2 left-4 transform -translate-y-1/2 
                   bg-lucia-red hover:bg-lucia-darkred bg-opacity-50 transition-all 
                   text-white text-5xl rounded-full hover:bg-opacity-75 hover:cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={nextImage}
        className="p-2 absolute top-1/2 right-4 transform -translate-y-1/2 
                   bg-lucia-red hover:bg-lucia-darkred transition-all bg-opacity-50 
                   text-white text-5xl rounded-full hover:bg-opacity-75 hover:cursor-pointer"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
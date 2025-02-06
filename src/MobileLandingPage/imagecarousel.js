import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tempimage0bjyne2 from "./tempimage0bjyne-2.png";
import tempimagescb1hw1 from "./tempimagescb1hw-1.png";
import tempimagewco3d63 from "./tempimagewco3d6-3.png";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./carousel.css"

const ImageCarousel = () => {
  // Sample images - in real usage, these would be passed as props
  const images = [
    { src: tempimage0bjyne2, alt: "Sample 1" },
    { src: tempimagescb1hw1, alt: "Sample 2" },
    { src: tempimagewco3d63, alt: "Sample 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
    <BsArrowLeftCircleFill className="arrow-carousel arrow-left" onClick={goToPrevious}/>
     {images.map((item, idx) => (
        <img src={item.src} alt={item.alt} key={idx} className={currentIndex === idx ? "slide" : "slide-hidden"} />
     ))}
     <BsArrowRightCircleFill className="arrow-carousel arrow-right" onClick={goToNext}/>
     <span className="indicators">
        {images.map((_, idx) => (
           <button key={idx} onClick={null} className={currentIndex === idx ? "indicator" : "indicator indicator-inactive"}></button> 
        ))}
     </span>
    </div>
  );
};

export default ImageCarousel;
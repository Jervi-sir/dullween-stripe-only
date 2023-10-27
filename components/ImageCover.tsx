import Image from 'next/image';
import { useState } from 'react';

export const ImageCover = ({ image_src, alt }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseClick = () => {
    setIsFullscreen(false);
  };
  
  return (
    <div className='bg-white w-full h-80 sm:h-96 py-10 sm:w-1/2 flex items-center justify-center'>
      <Image
        className='object-contain max-h-full max-w-full select-none cursor-pointer'
        src={image_src}
        alt={alt}
        width={600}
        height={600}
        onClick={handleImageClick}
      />

      {isFullscreen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseClick}
        >
          <Image
            className="object-contain max-h-screen max-w-screen select-none cursor-pointer"
            src={image_src}
            alt={alt}
            
          />
        </div>
      )}
    </div>
  );


}
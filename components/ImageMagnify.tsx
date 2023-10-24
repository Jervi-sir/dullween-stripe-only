import Image from 'next/image';
import { useState } from 'react';

export const ImageMagnify = ({ image_src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseOut={() => setIsHovered(false)}
      className="relative bg-white w-full h-80 sm:h-96 py-0 sm:w-1/2 flex items-center justify-center"
    >
      <Image
        className="object-contain max-h-full max-w-full select-none"
        src={image_src}
        alt={alt}
        width={600}
        height={600}
      />
      {isHovered && (
        <div
          style={{
            backgroundImage: `url(${image_src})`,
            backgroundPosition: `-${position.x}px -${position.y}px`,
            transform: 'scale(2)',
          }}
          className="border absolute top-0 right-10 w-1/2 h-1/2 bg-contain"
        />
      )}
    </div>
  );


}
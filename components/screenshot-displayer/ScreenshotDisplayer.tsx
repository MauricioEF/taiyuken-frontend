'use client';
import { useState } from 'react';

import Image from 'next/image';

import { cn } from '@/utils/styling-utils/StylingUtils';
import { ScreenshotDisplayerProps } from './ScreenshotDisplayer.types';

const ScreenshotDisplayer: React.FC<ScreenshotDisplayerProps> = ({
  images,
  index = 0,
}) => {
  const [currentScreenshot, setCurrentScreenshot] = useState<number>(index);
  const getPublicImage = (imageUrl:string) => {
    return `${imageUrl}public`;
  }

  const getThumbmailImage = (imageUrl:string) => {
    return  `${imageUrl}card`
  }
  return (
    <div className="w-full">
      <div className="relative w-full h-[70vh] grid grid-rows-4 gap-10">
        <div className="row-span-3 h-full relative"><Image fill sizes="full" src={getPublicImage(images[currentScreenshot])} className=" rounded-3xl" alt="main-screenshot" loading="eager" /></div>
        <div className='row-span-1 relative'>
          <div className="flex justify-center px-10 gap-5">
            {images.map((image,index)=><div className="w-50 h-30 relative" key={index}><Image fill sizes="(max-width:200lpx)"  src={getThumbmailImage(image)} alt={"thumbnail"} className={
              cn("rounded-2xl cursor-pointer object-cover",currentScreenshot === index ? "ring-4 ring-ring":"")
            } onClick={()=>setCurrentScreenshot(index)}/></div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotDisplayer;

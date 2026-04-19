import ScreenshotDisplayer from '@/components/screenshot-displayer';
import { FaSteam, FaQuestionCircle } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import { FaTag } from 'react-icons/fa6';
import { GiBulletBill } from 'react-icons/gi';

const mockVideogameDetails = {
  images: [
    'https://imagedelivery.net/TFdlNS3TWs8qiYkkJ6HFzg/befc6a2c-5fb0-462b-bf11-1dfe1c935500/',
    'https://imagedelivery.net/TFdlNS3TWs8qiYkkJ6HFzg/0c5218b2-ba26-4617-9df7-051ee35c9800/',
    'https://imagedelivery.net/TFdlNS3TWs8qiYkkJ6HFzg/8581a6d1-0230-45b4-24b5-5e6c53c5ea00/',
  ],
};

const mockVideogameTags={
  tags:[
    {name:"Horror"},
    {name:"For livestream"},
    {name:"Singleplayer"},
  ]
}
//TODO: Add sticky behavior to right column
const VideoGameDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-3 min-h-screen w-full  px-36 pt-10 gap-10">
      <div className="col-span-2 ">
        <ScreenshotDisplayer images={mockVideogameDetails.images} />
        <div className='flex flex-col gap-5'>
          <h1 className="text-6xl">Tiktok Strange Doors</h1>
          <p className="text-2xl text-brand pl-2">Will you open the correct Door?</p>
          <div className="w-full flex flex-row gap-3">
            {mockVideogameTags.tags.map((tag,index)=><p key={index} className="bg-surface rounded-2xl px-5 py-2.5 text-sm text-text-subtle">{tag.name}</p>)}
          </div>
          <h2 className="text-4xl">About this Game</h2>
          <p className="text-text">Tiktok Strange Doors is a horror game loop gifts-based where the content creator can interact with the audience and, based
            on the audience's choice (made by gifting to the streamer), it will automatically open a door in the game, which will
            lead to a random event, which can be good (next doors) or bad (jumpscare).
          </p>

          <h2 className="text-4xl">Key features</h2>

          <ul className="flex flex-col gap-3">
            <li className="w-full py-3 bg-surface rounded-2xl pl-3 flex items-center gap-3 text-text-subtle"><span><GiBulletBill  className="text-xl text-brand"/></span>Gift Based System. Must be played in livestream</li>
            <li className="w-full py-3 bg-surface rounded-2xl pl-3 flex items-center gap-3 text-text-subtle"><span><GiBulletBill  className="text-xl text-brand"/></span>GameLoop. You decide when it stops</li>
            <li className="w-full py-3 bg-surface rounded-2xl pl-3 flex items-center gap-3 text-text-subtle"><span><GiBulletBill  className="text-xl text-brand"/></span>Jumpscares, important to warn your watchers</li>
          </ul>

          <h3 className="text-4xl">System requirements</h3>
          <div className="w-full bg-surface-elevated h-40 mb-10 rounded-2xl flex items-center justify-center">
            <p className="text-text-subtle text-6xl text-center">To define</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-5">
        <div className="w-full h-1/4 bg-surface rounded-2xl grid grid-rows-3 gap-5 p-5">
          <div className="row-span-3 w-full rounded-2xl py-4 grid grid-rows-5 gap-3">
            <h2 className="row-span-1 pl-5 ">Available on Steam</h2>
            <p className=" row-span-2 pl-5 text-6xl">$50MXN</p>
            <button className="row-span-2 bg-brand h-full w-9/10 m-auto px-10 rounded-2xl text-2xl text-bg font-semibold space-x-2.5 flex justify-center gap-1 items-center">
              <FaSteam /> Go to Steam
            </button>
          </div>
        </div>
        <div className="w-full h-1/4 bg-surface rounded-2xl grid grid-rows-3 gap-5 p-5">
          <div className="row-span-1 bg-bg-subtle rounded-3xl flex flex-row">
            <div className="flex items-center flex-1">
              <CiCalendarDate className="w-full text-3xl text-brand font-bold" />
            </div>
            <div className="flex-5 flex flex-col gap-0.5 justify-center">
              <p>Release date:</p>
              <p className="text-xl">10/20/2026</p>
            </div>
          </div>
          <div className="row-span-1 bg-bg-subtle rounded-3xl flex flex-row">
            <div className="flex items-center flex-1">
              <FaTag className="w-full text-3xl text-brand font-bold" />
            </div>
            <div className="flex-5 flex flex-col gap-0.5  justify-center">
              <p>Project Type</p>
              <p className="text-xl">Client Request</p>
            </div>
          </div>
          <div className="row-span-1 bg-bg-subtle rounded-3xl flex flex-row">
            <div className="flex items-center flex-1">
              <FaQuestionCircle className="w-full text-3xl text-brand font-bold" />
            </div>
            <div className="flex-5 flex flex-col gap-0.5 justify-center">
              <p>Did you know...</p>
              <p className="text-xl">This was our first game!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGameDetails;

import React from 'react';
import Image from 'next/image';
import { Swords } from 'lucide-react';

const PlayedGame = () => {
  return (
    <div className="flex justify-evenly items-center rounded-2xl shadow-sm shadow-slate-500 bg-slate-600 px-10 py-2 mx-auto">
      <Player name="Youchen" imageSrc="/assets/profile.jpg" isOpponent={false} />
      <div className="flex px-5 gap-3">
        <span className=' font-bold text-xl'>1</span>
        <Swords size={24} fill='#F56723' stroke='#F56723' />
        <span className=' font-bold text-xl'>8</span>
      </div>
      <Player name="Opponent" imageSrc="/assets/avatar.jpg" isOpponent={true} />
    </div>
  );
}

const Player = ({ name, imageSrc , isOpponent }:{name:string, imageSrc:string, isOpponent:boolean}) => {
    return (
      <div className={`flex items-center gap-5 ${isOpponent ? 'flex-row-reverse' : ''}`}>
        <span className="font-semibold text-slate-300 ">{name}</span>
        <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-orange-400 shadow-md">
          <Image src={imageSrc} alt={`${name}'s profile`} width={200} height={200} className="object-cover" />
        </div>
      </div>
    );
  }


export default PlayedGame;
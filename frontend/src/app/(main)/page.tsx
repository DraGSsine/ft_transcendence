import AnalyticsGames from "@/components/profileHero/Analytics";
import FriendList from "@/components/profileHero/FriendList";
import GamesHistory from "@/components/profileHero/GamesHistory";
import HeroCard from "@/components/profileHero/HeroCard";

import Image from "next/image";

export default function Home() {
  const userProfileImage = "/assets/backgroundProfile.jpg";
  return (
    <main className="flex h-[90vh] justify-between w-full">
      <section className=" flex flex-col h-full">
        <HeroCard>
          <div
            style={{ backgroundImage: `url("${userProfileImage}")` }}
            className=" z-10 relative rounded-2xl p-4 h-full w-full bg-cover before:absolute before:rounded-2xl before:bg-opacity-60 before:inset-0 before:bg-black flex justify-between "
          >
            <div className="relative z-50 rounded-2xl flex bg-white/5 w-2/6 h-2/6 items-center p-4 backdrop-blur-lg">
              <div className=" flex">
                <div className="h-32 w-32 rounded-full overflow-hidden ">
                  <Image
                    src="/assets/profile.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col justify-center ml-5 gap-3 ">
                  <h1 className="text-2xl font-bold">Yassine Ouchen</h1>
                  <span className=" text-secondary">@youchen</span>
                </div>
              </div>
            </div>
            <div className="relative z-50 rounded-2xl flex bg-white/5 w-2/6 h-full p-4 backdrop-blur-lg flex-col justify-between ">
              <div className=" flex flex-col gap-4 items-end">
                <button className=" relative z-50 rounded-lg w-32 py-2 bg-red-600 ">
                  {" "}
                  Block{" "}
                </button>
                <button className=" relative z-50 rounded-lg w-32 py-2 bg-slate-800 ">
                  {" "}
                  Message{" "}
                </button>
                <button className=" relative z-50 rounded-lg w-32 py-2 bg-slate-800 ">
                  {" "}
                  Add Friend{" "}
                </button>
              </div>
              <div>
                <div className="py-2 flex gap-2 ">
                  <span className="font-bold text-zinc-200 ">Level</span>
                  <span>8.85</span>
                </div>
                <div className="h-3 w-full bg-gray-400/50 rounded-full">
                  <div
                    style={{ width: `50%` }}
                    className="h-3 bg-secondary rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </HeroCard>
        <div className="flex flex-grow w-full items-center justify-between ">
          <AnalyticsGames />
          <GamesHistory />
        </div>
      </section>
      <FriendList />
    </main>
  );
}

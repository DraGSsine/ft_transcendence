import AnalyticsGames from "@/components/profileHero/Analytics";
import FriendList from "@/components/profileHero/FriendList";
import GamesHistory from "@/components/profileHero/GamesHistory";
import HeroCard from "@/components/profileHero/HeroCard";
import UserProfile from "@/components/profileHero/UserProfile";

import Image from "next/image";

export default function Home() {
  const userProfileImage = "/assets/backgroundProfile.jpg";
  return (
    <main className="flex h-[90vh] justify-between w-full">
      <section className=" flex flex-col h-full">
        <HeroCard>
            <UserProfile userProfileImage={userProfileImage} />
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

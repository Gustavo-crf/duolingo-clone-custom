import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";

// Dados mockados para visualização do front-end
const mockUserProgress = {
  activeCourse: {
    id: 1,
    title: "Spanish",
    imageSrc: "/es.svg",
  },
  hearts: 5,
  points: 100,
};

const mockLeaderboard = [
  {
    userId: "1",
    userName: "Alice Johnson",
    userImageSrc: "/girl.svg",
    points: 1250,
  },
  {
    userId: "2",
    userName: "Bob Smith",
    userImageSrc: "/boy.svg",
    points: 1100,
  },
  {
    userId: "3",
    userName: "Carol Davis",
    userImageSrc: "/woman.svg",
    points: 950,
  },
  {
    userId: "4",
    userName: "David Wilson",
    userImageSrc: "/man.svg",
    points: 800,
  },
  {
    userId: "5",
    userName: "Eva Brown",
    userImageSrc: "/girl.svg",
    points: 750,
  },
  {
    userId: "6",
    userName: "Frank Miller",
    userImageSrc: "/boy.svg",
    points: 650,
  },
  {
    userId: "7",
    userName: "Grace Lee",
    userImageSrc: "/woman.svg",
    points: 550,
  },
  {
    userId: "8",
    userName: "Henry Taylor",
    userImageSrc: "/man.svg",
    points: 450,
  },
  {
    userId: "9",
    userName: "Ivy Chen",
    userImageSrc: "/girl.svg",
    points: 350,
  },
  {
    userId: "10",
    userName: "Jack Anderson",
    userImageSrc: "/boy.svg",
    points: 250,
  },
];

const LeaderboardPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={mockUserProgress.activeCourse}
          hearts={mockUserProgress.hearts}
          points={mockUserProgress.points}
          hasActiveSubscription={false}
        />
        <Promo />
        <Quests points={mockUserProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard"
            height={90}
            width={90}
          />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Leaderboard
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            See where you stand among other learners in the community.
          </p>

          <Separator className="mb-4 h-0.5 rounded-full" />
          {mockLeaderboard.map((userProgress, i) => (
            <div
              key={userProgress.userId}
              className="flex w-full items-center rounded-xl p-2 px-4 hover:bg-gray-200/50"
            >
              <p className="mr-4 font-bold text-lime-700">{i + 1}</p>

              <Avatar className="ml-3 mr-6 h-12 w-12 border bg-blue-500">
                <AvatarImage
                  src={userProgress.userImageSrc}
                  className="object-cover"
                />
              </Avatar>

              <p className="flex-1 font-bold text-neutral-800">
                {userProgress.userName}
              </p>
              <p className="text-muted-foreground">{userProgress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;

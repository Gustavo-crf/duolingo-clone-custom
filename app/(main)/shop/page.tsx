import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Items } from "./items";

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

const ShopPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={mockUserProgress.activeCourse}
          hearts={mockUserProgress.hearts}
          points={mockUserProgress.points}
          hasActiveSubscription={false}
        />

        <Quests points={mockUserProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image src="/shop.svg" alt="Shop" height={90} width={90} />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Shop
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Spend your points on cool stuff.
          </p>

          <Items
            hearts={mockUserProgress.hearts}
            points={mockUserProgress.points}
            hasActiveSubscription={false}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;

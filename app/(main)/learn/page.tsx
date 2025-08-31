import { FeedWrapper } from "@/components/feed-wrapper";
import { Calendar } from "@/components/calendar";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UpcomingClasses } from "@/components/upcoming-classes";

import { UnitBanner } from "./unit-banner";

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

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <Calendar />
      </StickyWrapper>
      <FeedWrapper>
        <div className="pt-8">
          <UnitBanner 
            title="Agendar uma aula" 
            description="Clique no botão para criar uma nova aula" 
          />
          <UpcomingClasses />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;

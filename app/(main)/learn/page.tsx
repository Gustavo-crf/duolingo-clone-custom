import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Header } from "./header";
import { Unit } from "./unit";

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

const mockUnits = [
  {
    id: 1,
    order: 1,
    title: "Unit 1: Basics",
    description: "Learn the basics of Spanish",
    lessons: [
      { id: 1, title: "Lesson 1", order: 1 },
      { id: 2, title: "Lesson 2", order: 2 },
      { id: 3, title: "Lesson 3", order: 3 },
    ],
  },
  {
    id: 2,
    order: 2,
    title: "Unit 2: Greetings",
    description: "Learn how to greet people in Spanish",
    lessons: [
      { id: 4, title: "Lesson 4", order: 1 },
      { id: 5, title: "Lesson 5", order: 2 },
      { id: 6, title: "Lesson 6", order: 3 },
    ],
  },
  {
    id: 3,
    order: 3,
    title: "Unit 3: Numbers",
    description: "Learn numbers in Spanish",
    lessons: [
      { id: 7, title: "Lesson 7", order: 1 },
      { id: 8, title: "Lesson 8", order: 2 },
      { id: 9, title: "Lesson 9", order: 3 },
    ],
  },
];

const mockCourseProgress = {
  activeLesson: { id: 1, title: "Lesson 1", order: 1 },
};

const LearnPage = () => {
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
        <Header title={mockUserProgress.activeCourse.title} />
        {mockUnits.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={mockCourseProgress.activeLesson}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;

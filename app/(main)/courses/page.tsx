import { List } from "./list";

// Dados mockados para visualização do front-end
const mockCourses = [
  {
    id: 1,
    title: "Spanish",
    imageSrc: "/es.svg",
    lessonsLength: 3,
    unitsLength: 3,
    progress: 0,
  },
  {
    id: 2,
    title: "French",
    imageSrc: "/fr.svg",
    lessonsLength: 3,
    unitsLength: 3,
    progress: 0,
  },
  {
    id: 3,
    title: "Italian",
    imageSrc: "/it.svg",
    lessonsLength: 3,
    unitsLength: 3,
    progress: 0,
  },
  {
    id: 4,
    title: "Japanese",
    imageSrc: "/jp.svg",
    lessonsLength: 3,
    unitsLength: 3,
    progress: 0,
  },
  {
    id: 5,
    title: "Croatian",
    imageSrc: "/hr.svg",
    lessonsLength: 3,
    unitsLength: 3,
    progress: 0,
  },
];

const CoursesPage = () => {
  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>

      <List courses={mockCourses} activeCourseId={null} />
    </div>
  );
};

export default CoursesPage;

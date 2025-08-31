import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export const UpcomingClasses = () => {
  const upcomingClasses = [
    {
      id: 1,
      student: "Aluno 1",
      date: "12/02/2025",
      time: "15:00",
      topic: "Tema X",
    },
    {
      id: 2,
      student: "Aluno 2", 
      date: "13/02/2025",
      time: "14:30",
      topic: "Tema Y",
    },
    {
      id: 3,
      student: "Aluno 3",
      date: "14/02/2025", 
      time: "16:00",
      topic: "Tema Z",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximas aulas:</h2>
      
      <div className="space-y-4">
        {upcomingClasses.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-lg border-2 p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-semibold text-gray-900 text-lg">
                    {classItem.student}
                  </span>
                  <span className="text-gray-600">
                    {classItem.date} {classItem.time}
                  </span>
                </div>
                <div className="text-gray-700 font-medium">
                  {classItem.topic}
                </div>
              </div>
              
              <Button
                variant="primary"
                size="sm"
                className="ml-4"
              >
                <Play className="h-4 w-4 mr-2" />
                Iniciar aula
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

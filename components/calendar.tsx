"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    return { daysInMonth, startingDay };
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date());
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
  const today = new Date();
  const isCurrentMonth = currentDate.getMonth() === today.getMonth() && 
                        currentDate.getFullYear() === today.getFullYear();

  const days = [];
  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Adicionar espaços vazios para os dias antes do primeiro dia do mês
  for (let i = 0; i < startingDay; i++) {
    days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
  }

  // Adicionar os dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = isCurrentMonth && day === today.getDate();
    days.push(
      <div
        key={day}
        className={`h-8 w-8 flex items-center justify-center text-sm rounded-full cursor-pointer transition-colors ${
          isToday 
            ? 'bg-blue-500 text-white font-bold' 
            : 'hover:bg-gray-100'
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-xl border-2 p-4 mt-6">
      <div className="space-y-3">
        {/* Header do calendário */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-extrabold tracking-wide capitalize">
            {getMonthName(currentDate)}
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousMonth}
              className="h-8 w-8 p-0 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNextMonth}
              className="h-8 w-8 p-0 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Nomes dos dias da semana */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {dayNames.map((day) => (
            <div key={day} className="text-xs font-medium text-gray-500 h-6 flex items-center justify-center">
              {day}
            </div>
          ))}
        </div>

        {/* Dias do calendário */}
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>

        {/* Botão para voltar ao mês atual */}
        {!isCurrentMonth && (
          <Button
            variant="outline"
            size="sm"
            onClick={goToCurrentMonth}
            className="w-full mt-2"
          >
            Voltar ao mês atual
          </Button>
        )}
      </div>
    </div>
  );
};

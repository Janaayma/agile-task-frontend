
import React, { useState } from 'react';
import { useTaskContext } from '@/context/TaskContext';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import TaskItem from '@/components/TaskItem';
import { format, isSameDay, parse } from 'date-fns';

const CalendarView: React.FC = () => {
  const { tasks } = useTaskContext();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Get tasks for the selected date
  const tasksForSelectedDay = selectedDate 
    ? tasks.filter(task => {
        const dueDate = task.dueDate ? parse(task.dueDate, 'yyyy-MM-dd', new Date()) : null;
        return dueDate && isSameDay(dueDate, selectedDate);
      })
    : [];

  // Get dates with tasks for highlighting in the calendar
  const datesWithTasks = tasks
    .filter(task => task.dueDate)
    .map(task => parse(task.dueDate!, 'yyyy-MM-dd', new Date()));

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Card className="md:w-auto">
        <CardContent className="p-2">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={{
              hasTasks: datesWithTasks
            }}
            modifiersStyles={{
              hasTasks: {
                fontWeight: 'bold',
                textDecoration: 'underline'
              }
            }}
          />
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardContent className="p-4">
          <h3 className="font-medium mb-4">
            Tasks for {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'today'}
          </h3>
          <div className="space-y-3">
            {tasksForSelectedDay.length > 0 ? (
              tasksForSelectedDay.map(task => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <div className="text-center p-4 text-muted-foreground">
                No tasks scheduled for this day
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarView;

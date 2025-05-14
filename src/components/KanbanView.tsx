
import React from 'react';
import { useTaskContext } from '@/context/TaskContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TaskItem from '@/components/TaskItem';

const KanbanView: React.FC = () => {
  const { tasks } = useTaskContext();

  // Group tasks by status
  const tasksByStatus = {
    'To Do': tasks.filter(task => task.status === 'pending'),
    'In Progress': tasks.filter(task => task.status === 'in-progress'),
    'Completed': tasks.filter(task => task.status === 'completed')
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(tasksByStatus).map(([status, statusTasks]) => (
        <Card key={status} className="bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              {status} 
              <span className="ml-2 text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">
                {statusTasks.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {statusTasks.length > 0 ? (
              statusTasks.map(task => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <div className="text-center p-4 text-muted-foreground text-sm">
                No tasks
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KanbanView;

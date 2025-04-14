
import React, { useState } from 'react';
import { Task } from '../data/mockData';
import { useTaskContext } from '../context/TaskContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash2, Edit, Calendar, CheckCircle2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';
import TaskForm from './TaskForm';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, updateTask } = useTaskContext();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  const handleStatusChange = (newStatus: 'pending' | 'in-progress' | 'completed') => {
    updateTask({
      ...task,
      status: newStatus
    });
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="task-card animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium">{task.title}</h3>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive"
            onClick={() => deleteTask(task.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{task.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <StatusBadge status={task.status} />
        <PriorityBadge priority={task.priority} />
        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
          {task.category}
        </span>
      </div>
      
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          <span>Due: {formatDate(task.dueDate)}</span>
        </div>
        
        {task.status !== 'completed' && (
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs"
            onClick={() => handleStatusChange('completed')}
          >
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Mark Complete
          </Button>
        )}
      </div>
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <TaskForm 
            initialData={task} 
            onSubmit={(updatedTask) => {
              updateTask(updatedTask as Task);
              setIsEditDialogOpen(false);
            }} 
            submitLabel="Update Task"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskItem;

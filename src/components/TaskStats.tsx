
import React, { useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { CheckCircle, Clock, AlertCircle, ListChecks } from 'lucide-react';

const TaskStats: React.FC = () => {
  const { tasks } = useTaskContext();
  
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === 'completed').length;
    const inProgress = tasks.filter(task => task.status === 'in-progress').length;
    const pending = tasks.filter(task => task.status === 'pending').length;
    const highPriority = tasks.filter(task => task.priority === 'high').length;
    
    return {
      total,
      completed,
      inProgress,
      pending,
      highPriority,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }, [tasks]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="stat-card flex items-center p-4">
        <div className="mr-4 bg-purple-100 p-3 rounded-full">
          <ListChecks className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Tasks</p>
          <p className="text-2xl font-semibold">{stats.total}</p>
        </div>
      </div>
      
      <div className="stat-card flex items-center p-4">
        <div className="mr-4 bg-green-100 p-3 rounded-full">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-2xl font-semibold">
            {stats.completed}
            <span className="text-sm text-gray-400 ml-1">
              ({stats.completionRate}%)
            </span>
          </p>
        </div>
      </div>
      
      <div className="stat-card flex items-center p-4">
        <div className="mr-4 bg-blue-100 p-3 rounded-full">
          <Clock className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-semibold">{stats.inProgress}</p>
        </div>
      </div>
      
      <div className="stat-card flex items-center p-4">
        <div className="mr-4 bg-red-100 p-3 rounded-full">
          <AlertCircle className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">High Priority</p>
          <p className="text-2xl font-semibold">{stats.highPriority}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;

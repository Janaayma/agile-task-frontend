
import React from 'react';
import TaskDashboard from '@/components/TaskDashboard';
import { TaskProvider } from '@/context/TaskContext';

const Index = () => {
  return (
    <TaskProvider>
      <TaskDashboard />
    </TaskProvider>
  );
};

export default Index;

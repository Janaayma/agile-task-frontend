
import React from 'react';
import Sidebar from './Sidebar';
import TaskList from './TaskList';
import KanbanView from './KanbanView';
import CalendarView from './CalendarView';
import TaskStats from './TaskStats';
import ViewSelector from './ViewSelector';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTaskContext } from '@/context/TaskContext';

const TaskDashboard: React.FC = () => {
  const isMobile = useIsMobile();
  const { viewMode } = useTaskContext();

  return (
    <div className="flex min-h-screen bg-background">
      {!isMobile && <Sidebar className="w-64 min-w-64" />}
      
      <div className="flex-1">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="pb-5 border-b border-border mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your tasks and stay organized
            </p>
          </div>
          
          <TaskStats />
          <ViewSelector />
          
          {viewMode === 'list' && <TaskList />}
          {viewMode === 'kanban' && <KanbanView />}
          {viewMode === 'calendar' && <CalendarView />}
        </main>
      </div>
    </div>
  );
};

export default TaskDashboard;

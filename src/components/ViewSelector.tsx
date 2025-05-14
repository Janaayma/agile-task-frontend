
import React from 'react';
import { useTaskContext } from '@/context/TaskContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { List, CalendarIcon, Kanban } from 'lucide-react';

const ViewSelector: React.FC = () => {
  const { viewMode, setViewMode } = useTaskContext();

  return (
    <div className="flex justify-end mb-4">
      <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as 'list' | 'kanban' | 'calendar')}>
        <ToggleGroupItem value="list" aria-label="List View">
          <List className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="kanban" aria-label="Kanban View">
          <Kanban className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="calendar" aria-label="Calendar View">
          <CalendarIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ViewSelector;

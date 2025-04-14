
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'pending' | 'in-progress' | 'completed';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium inline-block";
  
  const statusClasses = {
    'pending': 'status-pending',
    'in-progress': 'status-in-progress',
    'completed': 'status-completed',
  };
  
  const statusLabels = {
    'pending': 'Pending',
    'in-progress': 'In Progress',
    'completed': 'Completed',
  };

  return (
    <span className={cn(baseClasses, statusClasses[status], className)}>
      {statusLabels[status]}
    </span>
  );
};

export default StatusBadge;

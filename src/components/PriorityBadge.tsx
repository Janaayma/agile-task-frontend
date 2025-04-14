
import React from 'react';
import { cn } from '@/lib/utils';

interface PriorityBadgeProps {
  priority: 'low' | 'medium' | 'high';
  className?: string;
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, className }) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium inline-block";
  
  const priorityClasses = {
    'low': 'priority-low',
    'medium': 'priority-medium',
    'high': 'priority-high',
  };
  
  const priorityLabels = {
    'low': 'Low',
    'medium': 'Medium',
    'high': 'High',
  };

  return (
    <span className={cn(baseClasses, priorityClasses[priority], className)}>
      {priorityLabels[priority]}
    </span>
  );
};

export default PriorityBadge;

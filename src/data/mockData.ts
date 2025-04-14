
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate: string;
  createdAt: string;
}

export const categories = [
  'Work',
  'Personal',
  'Shopping',
  'Health',
  'Finance',
  'Education',
  'Other'
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Draft and finalize the project proposal document for the client.',
    status: 'in-progress',
    priority: 'high',
    category: 'Work',
    dueDate: '2025-04-20',
    createdAt: '2025-04-10'
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Purchase items for the week: fruits, vegetables, milk, eggs, bread.',
    status: 'pending',
    priority: 'medium',
    category: 'Shopping',
    dueDate: '2025-04-15',
    createdAt: '2025-04-11'
  },
  {
    id: '3',
    title: 'Morning run',
    description: 'Complete 5km run in the park.',
    status: 'completed',
    priority: 'low',
    category: 'Health',
    dueDate: '2025-04-14',
    createdAt: '2025-04-12'
  },
  {
    id: '4',
    title: 'Team meeting',
    description: 'Weekly sync with the development team to discuss progress.',
    status: 'pending',
    priority: 'high',
    category: 'Work',
    dueDate: '2025-04-16',
    createdAt: '2025-04-12'
  },
  {
    id: '5',
    title: 'Pay utility bills',
    description: 'Pay electricity, water, and internet bills for the month.',
    status: 'completed',
    priority: 'medium',
    category: 'Finance',
    dueDate: '2025-04-13',
    createdAt: '2025-04-08'
  },
  {
    id: '6',
    title: 'Learn React Hooks',
    description: 'Complete the tutorial on React Hooks and practice examples.',
    status: 'in-progress',
    priority: 'medium',
    category: 'Education',
    dueDate: '2025-04-25',
    createdAt: '2025-04-10'
  },
  {
    id: '7',
    title: 'Schedule dentist appointment',
    description: 'Call the dentist office to schedule a check-up.',
    status: 'pending',
    priority: 'low',
    category: 'Health',
    dueDate: '2025-04-30',
    createdAt: '2025-04-13'
  },
  {
    id: '8',
    title: 'Fix website bug',
    description: 'Address the navigation issue reported by users.',
    status: 'in-progress',
    priority: 'high',
    category: 'Work',
    dueDate: '2025-04-15',
    createdAt: '2025-04-13'
  }
];

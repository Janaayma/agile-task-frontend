
import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, CheckSquare, List, Menu, Settings, LogOut, Tag } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { categories, viewMode, setViewMode } = useTaskContext();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const sidebarContent = (
    <div className={cn("flex flex-col h-full bg-sidebar border-r border-sidebar-border", className)}>
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-primary flex items-center">
          <CheckSquare className="mr-2 h-6 w-6" />
          TaskMaster
        </h1>
      </div>
      
      <div className="flex-1 overflow-auto py-2">
        <nav className="space-y-1 px-2">
          <Button 
            variant="ghost" 
            className={cn("w-full justify-start", location.pathname === "/dashboard" && viewMode === "list" && "bg-primary/10 text-primary")} 
            onClick={() => setViewMode('list')}
            asChild
          >
            <Link to="/dashboard">
              <List className="mr-2 h-4 w-4" />
              All Tasks
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            className={cn("w-full justify-start", viewMode === "kanban" && "bg-primary/10 text-primary")} 
            onClick={() => setViewMode('kanban')}
            asChild
          >
            <Link to="/dashboard">
              <CheckSquare className="mr-2 h-4 w-4" />
              Kanban View
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            className={cn("w-full justify-start", viewMode === "calendar" && "bg-primary/10 text-primary")} 
            onClick={() => setViewMode('calendar')}
            asChild
          >
            <Link to="/dashboard">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar View
            </Link>
          </Button>
          
          <div className="pt-4 pb-2">
            <div className="px-2 flex items-center">
              <Tag className="h-4 w-4 text-sidebar-foreground/70" />
              <span className="ml-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
                Categories
              </span>
            </div>
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <div key={category} className="px-2 py-1 text-sm text-sidebar-foreground">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border space-y-1">
        <Button 
          variant="ghost" 
          className={cn("w-full justify-start", location.pathname === "/settings" && "bg-primary/10 text-primary")} 
          asChild
        >
          <Link to="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
        
        <Button 
          variant="ghost" 
          className={cn("w-full justify-start", location.pathname === "/login" && "bg-primary/10 text-primary")} 
          asChild
        >
          <Link to="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[250px] bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  return sidebarContent;
};

export default Sidebar;

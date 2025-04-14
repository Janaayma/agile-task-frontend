
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Plus, Tag } from 'lucide-react';

const TaskProjectSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Task Preferences</CardTitle>
          <CardDescription>Customize your task management experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-archive" className="font-medium">Auto-archive Completed Tasks</Label>
              <p className="text-sm text-gray-500">Automatically archive tasks when marked as complete</p>
            </div>
            <Switch id="auto-archive" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="due-reminders" className="font-medium">Due Date Reminders</Label>
              <p className="text-sm text-gray-500">Receive notifications for upcoming task deadlines</p>
            </div>
            <Switch id="due-reminders" defaultChecked />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="default-priority">Default Task Priority</Label>
            <Select defaultValue="medium">
              <SelectTrigger id="default-priority">
                <SelectValue placeholder="Select default priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="default-view">Default Task View</Label>
            <Select defaultValue="list">
              <SelectTrigger id="default-view">
                <SelectValue placeholder="Select default view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="list">List View</SelectItem>
                <SelectItem value="kanban">Kanban Board</SelectItem>
                <SelectItem value="calendar">Calendar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Categories</CardTitle>
          <CardDescription>Manage task categories</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {["Work", "Personal", "Shopping", "Health"].map((category) => (
                <div key={category} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <Tag className="h-4 w-4" />
                  <span className="text-sm">{category}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input placeholder="Add new category" />
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Working Hours</CardTitle>
          <CardDescription>Set your preferred working hours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-time">Start Time</Label>
              <Select defaultValue="9">
                <SelectTrigger id="start-time">
                  <SelectValue placeholder="Select start time" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 6).map((hour) => (
                    <SelectItem key={hour} value={hour.toString()}>
                      {hour}:00 {hour < 12 ? 'AM' : 'PM'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="end-time">End Time</Label>
              <Select defaultValue="17">
                <SelectTrigger id="end-time">
                  <SelectValue placeholder="Select end time" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 12).map((hour) => (
                    <SelectItem key={hour} value={hour.toString()}>
                      {hour > 12 ? hour - 12 : hour}:00 {hour < 12 ? 'AM' : 'PM'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Working Days</Label>
            <div className="grid grid-cols-7 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="flex flex-col items-center gap-1">
                  <Checkbox id={`day-${day}`} defaultChecked={index < 5} />
                  <Label htmlFor={`day-${day}`} className="text-xs">{day}</Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskProjectSettings;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sun, Moon, Palette } from 'lucide-react';

const AppearanceSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Theme</CardTitle>
          <CardDescription>Choose your preferred theme and color mode</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Color Mode</Label>
            <RadioGroup defaultValue="light" className="flex gap-4">
              <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="flex items-center cursor-pointer">
                  <Sun className="mr-2 h-5 w-5" />
                  Light
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="flex items-center cursor-pointer">
                  <Moon className="mr-2 h-5 w-5" />
                  Dark
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="cursor-pointer">System</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-4">
            <Label>Accent Color</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Purple', 'Blue', 'Green', 'Red'].map((color, index) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-2 ${index === 0 ? 'border-primary bg-primary text-white' : 'border-gray-200'}`}>
                    {index === 0 && <Palette className="h-5 w-5" />}
                  </div>
                  <span className="text-sm">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">User Interface</CardTitle>
          <CardDescription>Customize how the application appears</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="compact-mode" className="font-medium">Compact Mode</Label>
              <p className="text-sm text-gray-500">Reduce spacing for a more compact view</p>
            </div>
            <Switch id="compact-mode" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="animations" className="font-medium">Animations</Label>
              <p className="text-sm text-gray-500">Enable UI animations and transitions</p>
            </div>
            <Switch id="animations" defaultChecked />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="font-size">Font Size</Label>
            <Select defaultValue="medium">
              <SelectTrigger id="font-size">
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppearanceSettings;

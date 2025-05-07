
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sun, Moon, Palette, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';
import { toast } from 'sonner';

const AppearanceSettings = () => {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme();
  
  useEffect(() => {
    // Apply theme on component mount
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = (value: string) => {
    setTheme(value as 'light' | 'dark' | 'system');
    toast.success(`Theme changed to ${value} mode`);
  };
  
  const handleColorChange = (color: string) => {
    setColorTheme(color as 'purple' | 'blue' | 'green' | 'red');
    toast.success(`Theme color changed to ${color}`);
  };

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
            <RadioGroup 
              value={theme} 
              onValueChange={handleThemeChange}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="flex items-center cursor-pointer">
                  <Sun className="mr-2 h-5 w-5" />
                  Light
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="flex items-center cursor-pointer">
                  <Moon className="mr-2 h-5 w-5" />
                  Dark
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="cursor-pointer">System</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-4">
            <Label>Accent Color</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Purple', value: 'purple', color: 'bg-[hsl(258,68%,74%)]' },
                { name: 'Blue', value: 'blue', color: 'bg-[hsl(210,100%,66%)]' },
                { name: 'Green', value: 'green', color: 'bg-[hsl(142,71%,45%)]' },
                { name: 'Red', value: 'red', color: 'bg-[hsl(0,84%,60%)]' }
              ].map((color) => (
                <div 
                  key={color.value} 
                  className="flex flex-col items-center gap-2"
                  onClick={() => handleColorChange(color.value)}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-2 ${
                      colorTheme === color.value 
                        ? 'border-primary ring-2 ring-primary ring-opacity-50' 
                        : 'border-gray-200 dark:border-gray-700'
                    } ${color.color}`}
                  >
                    {colorTheme === color.value && <CheckCircle2 className="h-5 w-5 text-white" />}
                  </div>
                  <span className="text-sm">{color.name}</span>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">Reduce spacing for a more compact view</p>
            </div>
            <Switch id="compact-mode" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="animations" className="font-medium">Animations</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Enable UI animations and transitions</p>
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

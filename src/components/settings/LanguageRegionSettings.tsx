
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Globe, Clock } from 'lucide-react';
import { toast } from 'sonner';

const LanguageRegionSettings = () => {
  const [language, setLanguage] = useState('en');
  const [dateFormat, setDateFormat] = useState('mm-dd-yyyy');
  const [timeFormat, setTimeFormat] = useState('12');
  
  // Initialize settings from localStorage
  useEffect(() => {
    setLanguage(localStorage.getItem('language') || 'en');
    setDateFormat(localStorage.getItem('dateFormat') || 'mm-dd-yyyy');
    setTimeFormat(localStorage.getItem('timeFormat') || '12');
  }, []);
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    localStorage.setItem('language', value);
    toast.success(`Language changed to ${getLanguageName(value)}`);
  };
  
  const handleDateFormatChange = (value: string) => {
    setDateFormat(value);
    localStorage.setItem('dateFormat', value);
    toast.success(`Date format changed to ${value}`);
  };
  
  const handleTimeFormatChange = (value: string) => {
    setTimeFormat(value);
    localStorage.setItem('timeFormat', value);
    toast.success(`Time format changed to ${value === '12' ? '12-hour' : '24-hour'}`);
  };
  
  const getLanguageName = (code: string) => {
    const languages: Record<string, string> = {
      'en': 'English',
      'es': 'Español',
      'fr': 'Français',
      'de': 'Deutsch',
      'it': 'Italiano',
      'pt': 'Português',
      'ru': 'Русский',
      'zh': '中文',
      'ja': '日本語'
    };
    return languages[code] || code;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Language</CardTitle>
          <CardDescription>Choose your preferred language</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language" className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              Application Language
            </Label>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Format Preferences</CardTitle>
          <CardDescription>Choose your preferred date and time formats</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Date Format</Label>
            <RadioGroup 
              value={dateFormat}
              onValueChange={handleDateFormatChange}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="mm-dd-yyyy" id="mm-dd-yyyy" />
                <Label htmlFor="mm-dd-yyyy" className="cursor-pointer">MM/DD/YYYY</Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="dd-mm-yyyy" id="dd-mm-yyyy" />
                <Label htmlFor="dd-mm-yyyy" className="cursor-pointer">DD/MM/YYYY</Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="yyyy-mm-dd" id="yyyy-mm-dd" />
                <Label htmlFor="yyyy-mm-dd" className="cursor-pointer">YYYY/MM/DD</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-4">
            <Label>Time Format</Label>
            <RadioGroup 
              value={timeFormat}
              onValueChange={handleTimeFormatChange}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="12" id="12h" />
                <Label htmlFor="12h" className="cursor-pointer">12-hour (1:30 PM)</Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="24" id="24h" />
                <Label htmlFor="24h" className="cursor-pointer">24-hour (13:30)</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageRegionSettings;

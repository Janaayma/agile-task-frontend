
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Globe, Clock } from 'lucide-react';

const LanguageRegionSettings = () => {
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
            <Select defaultValue="en">
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
          <CardTitle className="text-xl">Region</CardTitle>
          <CardDescription>Set your regional preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="region">Region</Label>
            <Select defaultValue="us">
              <SelectTrigger id="region">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="eu">European Union</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="br">Brazil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc-8">
              <SelectTrigger id="timezone" className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-12">UTC-12:00</SelectItem>
                <SelectItem value="utc-11">UTC-11:00</SelectItem>
                <SelectItem value="utc-10">UTC-10:00</SelectItem>
                <SelectItem value="utc-9">UTC-09:00</SelectItem>
                <SelectItem value="utc-8">UTC-08:00 (Pacific Time)</SelectItem>
                <SelectItem value="utc-7">UTC-07:00 (Mountain Time)</SelectItem>
                <SelectItem value="utc-6">UTC-06:00 (Central Time)</SelectItem>
                <SelectItem value="utc-5">UTC-05:00 (Eastern Time)</SelectItem>
                <SelectItem value="utc-4">UTC-04:00</SelectItem>
                <SelectItem value="utc-3">UTC-03:00</SelectItem>
                <SelectItem value="utc-2">UTC-02:00</SelectItem>
                <SelectItem value="utc-1">UTC-01:00</SelectItem>
                <SelectItem value="utc">UTC±00:00</SelectItem>
                <SelectItem value="utc+1">UTC+01:00</SelectItem>
                <SelectItem value="utc+2">UTC+02:00</SelectItem>
                <SelectItem value="utc+3">UTC+03:00</SelectItem>
                <SelectItem value="utc+4">UTC+04:00</SelectItem>
                <SelectItem value="utc+5">UTC+05:00</SelectItem>
                <SelectItem value="utc+5.5">UTC+05:30 (India)</SelectItem>
                <SelectItem value="utc+6">UTC+06:00</SelectItem>
                <SelectItem value="utc+7">UTC+07:00</SelectItem>
                <SelectItem value="utc+8">UTC+08:00</SelectItem>
                <SelectItem value="utc+9">UTC+09:00</SelectItem>
                <SelectItem value="utc+10">UTC+10:00</SelectItem>
                <SelectItem value="utc+11">UTC+11:00</SelectItem>
                <SelectItem value="utc+12">UTC+12:00</SelectItem>
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
            <RadioGroup defaultValue="mm-dd-yyyy" className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <RadioGroup defaultValue="12" className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

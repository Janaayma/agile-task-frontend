
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AccountSettings from '@/components/settings/AccountSettings';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import TaskProjectSettings from '@/components/settings/TaskProjectSettings';
import LanguageRegionSettings from '@/components/settings/LanguageRegionSettings';
import Sidebar from '@/components/Sidebar';

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="taskproject">Task & Project</TabsTrigger>
              <TabsTrigger value="languageregion">Language & Region</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-4">
              <AccountSettings />
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-4">
              <AppearanceSettings />
            </TabsContent>
            
            <TabsContent value="taskproject" className="space-y-4">
              <TaskProjectSettings />
            </TabsContent>
            
            <TabsContent value="languageregion" className="space-y-4">
              <LanguageRegionSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;

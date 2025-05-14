
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AccountSettings from '@/components/settings/AccountSettings';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import TaskProjectSettings from '@/components/settings/TaskProjectSettings';
import LanguageRegionSettings from '@/components/settings/LanguageRegionSettings';
import Sidebar from '@/components/Sidebar';
import { TaskProvider } from '@/context/TaskContext';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
    <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong</h2>
    <p className="mb-4 text-gray-700">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
    >
      Try again
    </button>
  </div>
);

const SettingsContent = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Tabs 
          defaultValue="account" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="taskproject">Task & Project</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-4">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <AccountSettings />
            </ErrorBoundary>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <AppearanceSettings />
            </ErrorBoundary>
          </TabsContent>
          
          <TabsContent value="taskproject" className="space-y-4">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <TaskProjectSettings />
            </ErrorBoundary>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <TaskProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SettingsContent />
        </ErrorBoundary>
      </div>
    </TaskProvider>
  );
};

export default Settings;

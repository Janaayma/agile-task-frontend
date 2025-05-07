
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Database, Lock, Shield, Cloud } from 'lucide-react';

const BackendConnectionStatus = () => {
  // This is a placeholder that will be enhanced once Supabase is connected
  const isConnected = false;
  
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Database className="mr-2 h-5 w-5 text-primary" />
          Backend Connection
        </CardTitle>
        <CardDescription>
          {isConnected 
            ? "Your app is connected to Supabase backend services" 
            : "Connect to Supabase to enable backend features"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md flex items-center">
            <Lock className="mr-3 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Authentication</h3>
              <p className="text-sm text-muted-foreground">User accounts & login</p>
            </div>
          </div>
          <div className="p-4 border rounded-md flex items-center">
            <Database className="mr-3 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Database</h3>
              <p className="text-sm text-muted-foreground">Store and retrieve data</p>
            </div>
          </div>
          <div className="p-4 border rounded-md flex items-center">
            <Cloud className="mr-3 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Storage</h3>
              <p className="text-sm text-muted-foreground">File uploads & storage</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" disabled={isConnected}>
          {isConnected ? "Connected to Supabase" : "Connect to Supabase"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BackendConnectionStatus;

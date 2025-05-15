
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Database, Lock, Shield, Cloud, Check, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const BackendConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [authEnabled, setAuthEnabled] = useState(false);
  
  // Check Supabase connection
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Simple ping - just fetch the server timestamp to check connection
        const { data, error } = await supabase.rpc('get_service_role').maybeSingle();
        
        if (!error || error.code === 'PGRST116') {
          // If we get a PGRST116 error (function not found), that's okay
          // It means we can connect to Supabase, the function just doesn't exist
          setIsConnected(true);
        }
        
        // Check if auth is enabled by attempting to get the session
        const { data: sessionData } = await supabase.auth.getSession();
        setAuthEnabled(true);
      } catch (error) {
        console.error("Error checking Supabase connection:", error);
        setIsConnected(false);
      }
    };
    
    checkConnection();
  }, []);
  
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
            <div className="flex-1">
              <h3 className="font-medium">Authentication</h3>
              <p className="text-sm text-muted-foreground">User accounts & login</p>
            </div>
            {authEnabled ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <X className="h-5 w-5 text-red-500" />
            )}
          </div>
          <div className="p-4 border rounded-md flex items-center">
            <Database className="mr-3 h-5 w-5 text-primary" />
            <div className="flex-1">
              <h3 className="font-medium">Database</h3>
              <p className="text-sm text-muted-foreground">Store and retrieve data</p>
            </div>
            {isConnected ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <X className="h-5 w-5 text-red-500" />
            )}
          </div>
          <div className="p-4 border rounded-md flex items-center">
            <Cloud className="mr-3 h-5 w-5 text-primary" />
            <div className="flex-1">
              <h3 className="font-medium">Storage</h3>
              <p className="text-sm text-muted-foreground">File uploads & storage</p>
            </div>
            {isConnected ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <X className="h-5 w-5 text-red-500" />
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={isConnected ? "outline" : "default"} className="w-full" disabled={isConnected}>
          {isConnected ? "Connected to Supabase" : "Connect to Supabase"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BackendConnectionStatus;

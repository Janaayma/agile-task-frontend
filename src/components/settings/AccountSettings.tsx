
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Key, Lock } from 'lucide-react';

const AccountSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Profile Information</CardTitle>
          <CardDescription>Update your account profile details here</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Change
              </Button>
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="firstName" placeholder="John" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="lastName" placeholder="Doe" className="pl-10" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="email" placeholder="john.doe@example.com" className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Security</CardTitle>
          <CardDescription>Manage your password and security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <div className="relative">
                <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="current-password" type="password" className="pl-10" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="new-password" type="password" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="confirm-password" type="password" className="pl-10" />
                </div>
              </div>
            </div>
            
            <Button>Update Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;

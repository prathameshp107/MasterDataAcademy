"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Mail, Lock, User, Github, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <main className="min-h-screen bg-background relative flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                M
              </div>
            </Link>
            <h1 className="text-3xl font-black tracking-tight mb-2">
              {mode === 'signin' ? 'Welcome Back' : 'Join Master Data Academy'}
            </h1>
            <p className="text-muted-foreground font-medium">
              {mode === 'signin' 
                ? 'Resume your professional data journey' 
                : 'Start mastering data skills today'}
            </p>
          </div>

          <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardHeader className="p-8 pb-4">
              <div className="grid grid-cols-2 gap-2 bg-muted p-1 rounded-2xl mb-6">
                <Button 
                  variant={mode === 'signin' ? 'default' : 'ghost'} 
                  className={`rounded-xl font-bold ${mode === 'signin' ? 'shadow-sm' : ''}`}
                  onClick={() => setMode('signin')}
                >
                  Sign In
                </Button>
                <Button 
                  variant={mode === 'signup' ? 'default' : 'ghost'} 
                  className={`rounded-xl font-bold ${mode === 'signup' ? 'shadow-sm' : ''}`}
                  onClick={() => setMode('signup')}
                >
                  Sign Up
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-0">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {mode === 'signup' && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="name" placeholder="John Doe" className="pl-10 h-12 rounded-xl" />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input id="email" type="email" placeholder="name@company.com" className="pl-10 h-12 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    {mode === 'signin' && (
                      <Link href="#" className="text-xs text-primary font-bold hover:underline">Forgot password?</Link>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-12 rounded-xl" />
                  </div>
                </div>

                {mode === 'signin' && (
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="rounded-md" />
                    <Label htmlFor="remember" className="text-xs font-medium cursor-pointer">Remember me for 30 days</Label>
                  </div>
                )}

                <Button className="w-full h-12 rounded-xl font-bold shadow-lg shadow-primary/20 gradient-bg border-none mt-2">
                  {mode === 'signin' ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-muted-foreground font-bold">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 rounded-xl font-bold border-muted">
                  <Chrome className="w-4 h-4 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="h-12 rounded-xl font-bold border-muted">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </CardContent>

            <CardFooter className="p-8 pt-0 bg-muted/30 border-t border-muted flex justify-center">
              <p className="text-xs text-muted-foreground font-medium">
                By continuing, you agree to our 
                <Link href="#" className="text-primary font-bold mx-1 hover:underline">Terms of Service</Link> 
                and 
                <Link href="#" className="text-primary font-bold ml-1 hover:underline">Privacy Policy</Link>.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}

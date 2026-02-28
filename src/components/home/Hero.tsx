"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
      {/* Modern Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
            data-ai-hint={heroBg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/95 to-transparent z-10" />
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[80%] bg-primary/10 rounded-full blur-[120px] z-0 animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[70%] bg-secondary/5 rounded-full blur-[120px] z-0" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold gradient-text uppercase tracking-widest">Elevate your expertise</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black leading-[1] mb-8 tracking-tighter text-foreground">
              Master the <br />
              <span className="gradient-text">Future of Data</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed font-medium">
              Join the world's most elite learning community for Data Science, AI, and Engineering professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/courses">
                <Button className="h-16 px-10 rounded-full text-lg font-bold shadow-2xl shadow-primary/30 gradient-bg border-none hover:scale-105 transition-all">
                  Get Started Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Button variant="outline" className="h-16 px-10 rounded-full text-lg font-bold border-2 bg-white/10 backdrop-blur-md hover:bg-white transition-all">
                View Curriculum
              </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center gap-10 opacity-60">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-sm font-bold uppercase tracking-widest">Verified Certificates</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-secondary" />
                <span className="text-sm font-bold uppercase tracking-widest">Top Rated 2025</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Feature Image with modern framing */}
              <div className="absolute inset-0 rounded-[4rem] overflow-hidden shadow-2xl z-10 border-[12px] border-white/30 backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="https://picsum.photos/seed/modernlearn/1000/1000"
                  alt="Modern learning platform"
                  fill
                  className="object-cover"
                  data-ai-hint="learning"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Glass Stats Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-6 glass p-6 rounded-[2rem] shadow-2xl z-20 flex items-center gap-4 border-white/40 min-w-[200px]"
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-lg font-black">150+ Courses</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Professional Level</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-6 rounded-[2rem] shadow-2xl z-20 flex items-center gap-4 border-white/40 min-w-[200px]"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl">
                  4.9
                </div>
                <div>
                  <p className="text-lg font-black">Average Rating</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Trusted by Experts</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
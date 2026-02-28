
"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Target, 
  Users, 
  Globe, 
  Briefcase, 
  Code2, 
  Trophy, 
  Headphones, 
  Clock, 
  CheckCircle 
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const missionImg = PlaceHolderImages.find(img => img.id === 'about-mission');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white border-b border-border">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-6 py-2 rounded-full font-bold mb-6 uppercase tracking-widest text-xs">
              Who We Are
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              Empowering the <br />
              <span className="gradient-text">Next Data Generation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              We are a dedicated collective of industry veterans, AI researchers, and engineers 
              committed to bridge the gap between academic theory and professional mastery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grow Your Skills Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
                Grow Your Skills With <br />
                <span className="text-primary">Master Data Academy</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                At Master Data Academy, our mission is to empower the next generation of data professionals 
                with the tools, techniques, and confidence to transform data into powerful business decisions. 
                Whether you're starting from scratch or upskilling for your next role, we provide the right 
                blend of theory and practice to help you thrive.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  { label: "Industry-Focused Training", icon: Briefcase },
                  { label: "Hands-On Projects", icon: Code2 },
                  { label: "Job-Ready Skills", icon: Trophy },
                  { label: "Career Support", icon: Headphones },
                  { label: "Flexible Learning", icon: Clock },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-[2rem] border border-border">
                <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  Beyond the Classroom
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learning goes beyond textbooks. Our curriculum mirrors the challenges faced by engineers 
                  at top-tier tech companies, providing the environment and mentorship you need to succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[4rem] rotate-3 blur-2xl opacity-10" />
              <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
                {missionImg && (
                  <Image 
                    src={missionImg.imageUrl} 
                    alt={missionImg.description} 
                    fill 
                    className="object-cover" 
                    data-ai-hint={missionImg.imageHint}
                  />
                )}
              </div>
              
              {/* Floating Success Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-border flex items-center gap-4 hidden md:flex">
                 <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Success Rate</p>
                    <p className="text-xl font-black">94% Hired</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h3 className="text-3xl font-black mb-6">Built on Strong Foundations</h3>
             <p className="text-muted-foreground text-lg">Our core principles guide every course we build and every student we mentor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Practical Over Theoretical",
                desc: "Every concept is taught through the lens of industry application. No fluff, just skills.",
                icon: Globe
              },
              {
                title: "Expertise First",
                desc: "Our instructors are active practitioners, not just full-time teachers.",
                icon: Users
              },
              {
                title: "Community Driven",
                desc: "Learning is better together. Join a global network of ambitious professionals.",
                icon: Target
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-primary mb-8">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

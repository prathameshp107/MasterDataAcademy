"use client";

import { use } from 'react';
import { COURSES } from '@/lib/data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { 
  Star, 
  Clock, 
  Globe, 
  PlayCircle, 
  CheckCircle2, 
  Award, 
  Calendar, 
  Share2, 
  Heart,
  BookOpen,
  Layout,
  Users,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    notFound();
  }

  const courseTopics = course.topics || [
    'Fundamentals of ' + course.category,
    'Advanced Techniques and Methodologies',
    'Real-world Case Studies',
    'Industry Standard Tools',
    'Best Practices and Performance Optimization'
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Dark Hero Header */}
      <section className="bg-slate-950 text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/10 rounded-full blur-[120px] -z-0 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-4 py-1">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="text-white border-white/20 px-4 py-1">
                  {course.level}
                </Badge>
                <Badge className="bg-secondary/20 text-secondary border-none px-4 py-1 font-bold">
                  Bestseller
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]"
              >
                {course.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium"
              >
                {course.description} Gain industry-recognized skills with our comprehensive, hands-on curriculum designed for modern professionals.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-8 text-sm"
              >
                <div className="flex items-center gap-2 text-yellow-400 font-black text-lg">
                  <span>{course.rating}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-slate-500 font-bold ml-1 text-sm">
                    ({course.studentsCount.toLocaleString()} Students Enrolled)
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full relative overflow-hidden border border-white/20">
                    <Image src={course.instructor.avatar} alt={course.instructor.name} fill className="object-cover" />
                  </div>
                  <span className="text-slate-300 font-bold">
                    Instructor: <span className="text-primary hover:underline cursor-pointer">{course.instructor.name}</span>
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest"
              >
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {course.duration}</span>
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> English</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Certified Path</span>
                <span className="flex items-center gap-2"><Layout className="w-4 h-4 text-primary" /> 100% Online</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Stats Overlay */}
      <section className="relative z-20 -mt-10 lg:-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-border p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Lessons', val: course.lessonsCount || 120, icon: PlayCircle },
                    { label: 'Resources', val: course.resourcesCount || 15, icon: BookOpen },
                    { label: 'Skill Level', val: course.level, icon: BarChart3 },
                    { label: 'Duration', val: course.duration, icon: Clock }
                  ].map((stat, i) => (
                    <div key={i} className="text-center md:text-left">
                       <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3 mx-auto md:mx-0">
                         <stat.icon className="w-5 h-5" />
                       </div>
                       <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                       <p className="text-xl font-black">{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Floating Card */}
            <div className="lg:col-span-4 lg:relative">
              <Card className="lg:absolute lg:top-[-150px] w-full rounded-[3rem] border-none shadow-2xl overflow-hidden bg-white">
                <div className="relative aspect-video">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer border border-white/30">
                      <PlayCircle className="w-10 h-10 fill-current" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-10">
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-5xl font-black text-foreground">${course.price}</span>
                    <span className="text-xl text-muted-foreground line-through">$199.99</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <Button className="w-full h-16 rounded-2xl font-black text-xl shadow-2xl shadow-primary/20 gradient-bg border-none hover:scale-[1.02] transition-transform">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full h-16 rounded-2xl font-black text-xl border-2 hover:bg-muted">
                      Save to Wishlist
                    </Button>
                  </div>
                  
                  <div className="space-y-5">
                    <h4 className="font-black text-sm uppercase tracking-widest text-muted-foreground">This course includes:</h4>
                    <ul className="space-y-4">
                      {[
                        { icon: PlayCircle, label: `${course.lessonsCount || 120} video lessons` },
                        { icon: BookOpen, label: `${course.resourcesCount || 15} downloadable assets` },
                        { icon: Award, label: 'Certificate of Completion' },
                        { icon: Users, label: 'Community Support Access' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm font-bold text-muted-foreground">
                          <item.icon className="w-5 h-5 text-primary" />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-muted flex items-center justify-between">
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" /> Wishlist
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-20">
              
              {/* Learning Outcomes */}
              <div>
                <h3 className="text-3xl font-black mb-8">What You'll Master</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courseTopics.map((topic, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-border group hover:bg-white hover:shadow-lg transition-all">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="text-sm font-bold text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div>
                <h3 className="text-3xl font-black mb-8">Course Curriculum</h3>
                <div className="flex justify-between items-center mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  <p>{course.lessonsCount || 145} Lectures • {course.duration} Total</p>
                  <Button variant="link" className="text-primary font-black">Expand All</Button>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    { title: 'Module 1: Foundations & Setup', count: '12 lessons • 2h 45m' },
                    { title: 'Module 2: Core Architectures', count: '24 lessons • 5h 20m' },
                    { title: 'Module 3: Advanced Optimization', count: '18 lessons • 4h 15m' },
                    { title: 'Module 4: Real-world Capstone', count: '15 lessons • 8h 0m' }
                  ].map((section, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-[2rem] overflow-hidden px-8 bg-white shadow-sm">
                      <AccordionTrigger className="hover:no-underline py-8">
                        <div className="flex flex-col items-start text-left gap-1">
                          <span className="text-xl font-black tracking-tight">{section.title}</span>
                          <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{section.count}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-8">
                         <div className="space-y-6 pt-4 border-t border-muted">
                           {[1,2,3].map(lesson => (
                             <div key={lesson} className="flex items-center justify-between group cursor-pointer hover:bg-muted/50 p-2 rounded-xl transition-all">
                               <div className="flex items-center gap-4">
                                 <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                   <PlayCircle className="w-4 h-4" />
                                 </div>
                                 <span className="text-sm font-bold group-hover:text-primary transition-colors">
                                   {i+1}.{lesson} Master the Core Principles of {course.category}
                                 </span>
                               </div>
                               <span className="text-xs text-muted-foreground font-bold">15:42</span>
                             </div>
                           ))}
                         </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Instructor Profile */}
              <div>
                <h3 className="text-3xl font-black mb-8">Meet Your Instructor</h3>
                <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-border shadow-sm flex flex-col md:flex-row gap-12 items-center md:items-start">
                  <div className="w-40 h-40 md:w-56 md:h-56 relative rounded-[3rem] overflow-hidden flex-shrink-0 shadow-2xl">
                    <Image src={course.instructor.avatar} alt={course.instructor.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-3xl font-black text-primary mb-2">{course.instructor.name}</h4>
                    <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-6">{course.instructor.role}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div>
                        <p className="text-2xl font-black">4.9</p>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Rating</p>
                      </div>
                      <div className="border-x border-muted px-4">
                        <p className="text-2xl font-black">1.2M+</p>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Students</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black">15+</p>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Years exp.</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed font-medium italic">
                      {course.instructor.bio || `Expert instructor with deep practical knowledge in ${course.category}. Dedicated to bridging the gap between theory and industry excellence.`}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
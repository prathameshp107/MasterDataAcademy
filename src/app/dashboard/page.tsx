"use client";

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Award, Sparkles, PlayCircle, ChevronRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { personalizeDashboardRecommendations, AiPersonalizedDashboardRecommendationsOutput } from '@/ai/flows/ai-personalized-dashboard-recommendations';
import { COURSES } from '@/lib/data';

export default function UserDashboard() {
  const [aiRecs, setAiRecs] = useState<AiPersonalizedDashboardRecommendationsOutput | null>(null);
  const [loadingAi, setLoadingAi] = useState(true);

  useEffect(() => {
    async function getRecommendations() {
      try {
        const result = await personalizeDashboardRecommendations({
          userId: 'user_123',
          viewingHistory: [
            { courseId: 'course-1', title: 'Mastering Python for Data Science', lastViewed: new Date().toISOString() }
          ],
          enrolledCourses: [
            { courseId: 'course-1', title: 'Mastering Python for Data Science', progress: 45, status: 'in_progress' }
          ],
          userInterests: ['Machine Learning', 'Big Data'],
          availableCourses: COURSES.map(c => ({
            courseId: c.id,
            title: c.title,
            description: c.description,
            category: c.category
          }))
        });
        setAiRecs(result);
      } catch (err) {
        console.error("Failed to load recommendations", err);
      } finally {
        setLoadingAi(false);
      }
    }

    getRecommendations();
  }, []);

  return (
    <main className="min-h-screen bg-background pb-24">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            <header className="mb-8">
              <h1 className="text-4xl font-black tracking-tight mb-2">Welcome back, Alex! 👋</h1>
              <p className="text-muted-foreground">Continue where you left off and sharpen your skills.</p>
            </header>

            {/* Resume Learning */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-primary" />
                In Progress
              </h2>
              <Card className="rounded-[2rem] overflow-hidden border-none shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-64 aspect-video md:aspect-auto">
                    <Image 
                      src="https://picsum.photos/seed/ds1/600/400" 
                      alt="Python" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <CardContent className="p-8 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">Data Science</Badge>
                        <h3 className="text-2xl font-bold">Mastering Python for Data Science</h3>
                      </div>
                      <span className="text-sm font-bold text-primary">45% Complete</span>
                    </div>
                    <Progress value={45} className="h-3 mb-6 bg-muted rounded-full" />
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground font-medium">Next: Data Visualization with Matplotlib</p>
                      <Link href="/courses/course-1">
                        <Button className="rounded-full px-8 shadow-lg shadow-primary/20">Resume Lesson</Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </section>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Courses Enrolled', val: '4', icon: BookOpen, color: 'bg-blue-500' },
                { label: 'Hours Learned', val: '24.5', icon: Clock, color: 'bg-indigo-500' },
                { label: 'Certificates', val: '1', icon: Award, color: 'bg-violet-500' }
              ].map((stat, i) => (
                <Card key={i} className="rounded-3xl border-none shadow-sm p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
                    <p className="text-2xl font-black">{stat.val}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* My Learning */}
            <section>
               <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">My Learning</h2>
                <Button variant="link" className="text-primary font-bold">View All</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {COURSES.slice(1, 3).map(course => (
                  <Card key={course.id} className="rounded-3xl overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
                    <div className="flex gap-4 p-4">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base mb-1 line-clamp-1">{course.title}</h4>
                        <p className="text-xs text-muted-foreground mb-3">{course.instructor.name}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <Progress value={Math.random() * 100} className="h-1.5" />
                          </div>
                          <span className="text-[10px] font-bold">Track</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
               </div>
            </section>
          </div>

          {/* Sidebar Area - AI Recommendations */}
          <aside className="w-full lg:w-96 space-y-8">
            <Card className="rounded-[2.5rem] overflow-hidden border-none shadow-xl bg-white sticky top-32">
              <div className="p-8 gradient-bg text-white relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                 <Sparkles className="w-8 h-8 mb-4 text-white/90" />
                 <h3 className="text-2xl font-black mb-2">AI Recommendations</h3>
                 <p className="text-sm opacity-80 leading-relaxed font-medium">
                   Based on your interest in Machine Learning, we think you'll love these:
                 </p>
              </div>
              <CardContent className="p-6">
                {loadingAi ? (
                  <div className="space-y-6 py-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="animate-pulse flex items-start gap-4">
                        <div className="w-12 h-12 bg-muted rounded-xl" />
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-muted rounded w-3/4" />
                          <div className="h-3 bg-muted rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6 py-2">
                    {aiRecs?.recommendations.map((rec, idx) => (
                      <Link key={rec.courseId} href={`/courses/${rec.courseId}`}>
                        <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-muted transition-all cursor-pointer">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-6 h-6" />
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h4 className="font-bold text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">{rec.title}</h4>
                            <p className="text-[10px] text-muted-foreground line-clamp-2 leading-tight">{rec.reason}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                
                <Button className="w-full mt-6 rounded-full border-2 border-primary text-primary hover:bg-primary/5 bg-transparent font-bold">
                  View Career Roadmap
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-[2.5rem] overflow-hidden border-none shadow-sm bg-indigo-50/50 p-8">
               <h3 className="font-bold mb-4">Upcoming Live Session</h3>
               <div className="bg-white rounded-3xl p-5 shadow-sm">
                  <p className="text-xs font-bold text-secondary mb-1 uppercase tracking-wider">Tomorrow at 2:00 PM</p>
                  <h4 className="font-bold text-lg mb-3">Q&A with Data Engineering Experts</h4>
                  <div className="flex -space-x-3 mb-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden">
                         <Image src={`https://picsum.photos/seed/face${i}/100/100`} alt="user" fill />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center text-[10px] font-bold">
                      +12
                    </div>
                  </div>
                  <Button className="w-full rounded-2xl bg-secondary hover:bg-secondary/90 shadow-md shadow-secondary/20">Add to Calendar</Button>
               </div>
            </Card>
          </aside>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
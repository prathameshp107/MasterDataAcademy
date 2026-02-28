import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, Database, Users, Star, Quote, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TESTIMONIALS } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Stats Section - Modern Glassmorphism */}
      <section className="container mx-auto px-4 -mt-20 relative z-30 mb-24">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: '50K+', label: 'Active Students' },
              { val: '150+', label: 'Expert Courses' },
              { val: '200+', label: 'Lead Instructors' },
              { val: '98%', label: 'Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className={i > 0 ? "lg:border-l border-border" : ""}>
                <h3 className="text-4xl font-black gradient-text mb-2">{stat.val}</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCourses />

      {/* Why MasterData Section - Enhanced & Prominent */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-6 py-2 rounded-full font-bold mb-6">
              The MasterData Advantage
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Why MasterData?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide a premium learning experience designed for professionals who want to master
              real-world data challenges with the support of AI and industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Guided Career Paths',
                desc: 'Intelligent roadmaps that adapt to your progress, suggesting the perfect next step in your data journey.',
                icon: Layout,
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Production-Ready Skills',
                desc: 'Skip the basics. Learn how to deploy models, scale pipelines, and manage enterprise-grade data architecture.',
                icon: Database,
                color: 'from-indigo-600 to-violet-700'
              },
              {
                title: 'Expert-Led Community',
                desc: 'Direct access to senior engineers from top tech companies through our exclusive mentorship network.',
                icon: Users,
                color: 'from-violet-700 to-primary'
              }
            ].map((item, i) => (
              <Card key={i} className="group relative bg-white/50 backdrop-blur-sm p-10 rounded-[3rem] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest cursor-pointer mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle className="text-primary w-5 h-5" /> Fortune 500 Trusted</div>
            <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle className="text-primary w-5 h-5" /> Ivy League Quality</div>
            <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle className="text-primary w-5 h-5" /> Global Certifications</div>
          </div>
        </div>
      </section>

      {/* Student Feedback Section - Modern Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/20 text-primary mb-6">Testimonials</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Voice of Our Students</h2>
            <p className="text-xl text-muted-foreground">Join 50,000+ professionals who have accelerated their careers with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="rounded-[2.5rem] border-none shadow-xl bg-slate-50/50 p-8 text-left relative overflow-hidden group hover:bg-white transition-colors duration-300">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-primary/5 -rotate-12 group-hover:scale-110 transition-transform" />
                <CardContent className="p-0 space-y-6 relative z-10">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg font-medium text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm">{testimonial.name}</h4>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Refined Experience */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-[hsl(180,8%,15%)] px-6 py-20 md:p-24 text-center text-white shadow-2xl">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">Join the Future of Data</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Ascend to Mastery?</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
                Unlock 150+ premium courses and industry-recognized certifications.
                Join 50,000+ professionals transforming their futures today.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-2">
                <Button className="bg-primary hover:bg-primary/90 text-white h-16 px-10 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 group">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white h-16 px-10 rounded-2xl text-lg font-bold transition-all duration-300">
                  Business Solutions
                </Button>
              </div>

              {/* Enhanced Trust Badges */}
              <div className="pt-16 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <h4 className="text-sm font-black text-white mb-1">No Credit Card</h4>
                      <p className="text-xs text-slate-300 font-medium">Start free, no payment info needed</p>
                    </div>
                  </div>
                  
                  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-white mb-1">Cancel Anytime</h4>
                      <p className="text-xs text-slate-300 font-medium">Flexible plans, zero commitment</p>
                    </div>
                  </div>
                  
                  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-white mb-1">Lifetime Access</h4>
                      <p className="text-xs text-slate-300 font-medium">Learn at your own pace forever</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Trust Element */}
                <div className="mt-8 flex justify-center items-center gap-3 text-slate-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Trusted by 50,000+ professionals worldwide</span>
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

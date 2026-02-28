
"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Globe,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
  const mapImg = PlaceHolderImages.find(img => img.id === 'google-maps');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-950 text-white">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/20 rounded-full blur-[120px] -z-0 translate-x-1/2" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary/20 text-primary border-none px-6 py-2 rounded-full font-bold mb-6 uppercase tracking-widest text-xs">
              Connect With Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              Let's Start a <br />
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you're looking for enterprise solutions or individual mastery, 
              our advisors are here to guide your data evolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Form Area */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <Card className="rounded-[3rem] border-none shadow-2xl bg-white p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl font-black mb-4">Send us a message</h2>
                  <p className="text-muted-foreground font-medium">Fill out the form below and we'll be in touch shortly.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                      <Input placeholder="John Doe" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                      <Input type="email" placeholder="john@company.com" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                    <Input placeholder="Course Inquiry" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white transition-all shadow-sm" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <Textarea 
                      placeholder="Tell us about your goals..." 
                      className="min-h-[180px] rounded-[2rem] bg-slate-50 border-transparent focus:bg-white transition-all p-6 shadow-sm"
                    />
                  </div>

                  <Button className="w-full h-16 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 gradient-bg border-none hover:scale-[1.02] transition-transform">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Sidebar Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-black mb-8">Global Headquarters</h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Our Office", detail: "123 Innovation Way, Tech District, NY 10001", color: "bg-blue-500" },
                    { icon: Phone, title: "Support Line", detail: "+1 (888) DATA-ADS", color: "bg-indigo-500" },
                    { icon: Mail, title: "Inquiries", detail: "hello@masterdata.academy", color: "bg-violet-500" },
                    { icon: Clock, title: "Operating Hours", detail: "Mon - Fri: 8:00 AM - 8:00 PM EST", color: "bg-primary" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-border shadow-sm group hover:shadow-lg transition-all">
                      <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-sm uppercase tracking-widest text-muted-foreground mb-1">{item.title}</h4>
                        <p className="font-bold text-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Map Section */}
              <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                {mapImg && (
                  <Image 
                    src={mapImg.imageUrl} 
                    alt={mapImg.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    data-ai-hint={mapImg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white animate-bounce shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                     <MapPin className="w-8 h-8 fill-current" />
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Live Location</p>
                    <p className="text-sm font-bold text-foreground">Tech City Innovation Hub</p>
                  </div>
                </div>
              </div>

              {/* Support CTA */}
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                   <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] mb-4">
                     <Sparkles className="w-4 h-4" />
                     Priority Access
                   </div>
                   <h4 className="text-xl font-black mb-3">Enterprise Inquiry?</h4>
                   <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     Get a custom roadmap for your team with dedicated success management.
                   </p>
                   <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold h-12">
                     <Globe className="w-4 h-4 mr-2" />
                     Schedule Demo
                   </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { COURSES, CATEGORIES } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseCatalogue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tight mb-4">Course Catalogue</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover a wide range of expert-led courses across all data domains.
          </p>
        </div>
      </section>

      <section className="py-8 sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="What do you want to learn today?" 
              className="pl-10 h-12 rounded-2xl bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 rounded-2xl px-6 gap-2 bg-white">
                  <Filter className="w-4 h-4" />
                  {selectedCategory}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                <DropdownMenuItem onClick={() => setSelectedCategory('All')}>All Categories</DropdownMenuItem>
                {CATEGORIES.map(cat => (
                  <DropdownMenuItem key={cat} onClick={() => setSelectedCategory(cat)}>
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 rounded-2xl px-6 gap-2 bg-white">
                  <SlidersHorizontal className="w-4 h-4" />
                  Sort: {sortBy}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                <DropdownMenuItem onClick={() => setSortBy('Newest')}>Newest First</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('Popularity')}>Popularity</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('Rating')}>Highest Rating</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('Price Low-High')}>Price: Low to High</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Showing {filteredCourses.length} courses
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-border">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-2">No courses found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                className="mt-6 rounded-full px-8"
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
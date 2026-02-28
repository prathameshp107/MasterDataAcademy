"use client";

import { COURSES, CATEGORIES } from '@/lib/data';
import { CourseCard } from '@/components/courses/CourseCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-black mb-4 tracking-tight">Featured Courses</h2>
            <p className="text-muted-foreground max-w-lg">
              Hand-picked selections from our experts to help you get started on your 
              learning journey today.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeCategory === 'All' ? 'default' : 'ghost'} 
              className="rounded-full font-bold px-6"
              onClick={() => setActiveCategory('All')}
            >
              All
            </Button>
            {CATEGORIES.slice(0, 4).map(cat => (
              <Button 
                key={cat}
                variant={activeCategory === cat ? 'default' : 'ghost'}
                className="rounded-full font-bold px-6"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.slice(0, 6).map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Users, Play } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/lib/data';
import WhatsAppIcon from '@/components/ui/WhatsappIcon'; // Import the WhatsApp icon

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const discountedPrice = course.price && course.discount
    ? course.price * (1 - course.discount / 100)
    : null;

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(course.title)}%20${encodeURIComponent(`https://masterdataacademy.com/${course.id}`)}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl h-full flex flex-col bg-white">
      <div className="relative aspect-video overflow-hidden">
        <Link href={`/courses/${course.id}`}>
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={course.category}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg scale-90 group-hover:scale-100 transition-transform">
              <Play className="fill-current" />
            </div>
          </div>
          <Badge className="absolute top-3 left-3 bg-white/90 text-foreground font-semibold backdrop-blur-sm border-none shadow-sm">
            {course.category}
          </Badge>
          {course.discount && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-bold">
              -{course.discount}%
            </Badge>
          )}
        </Link>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold">{course.rating}</span>
          <span className="text-xs text-muted-foreground">({course.studentsCount.toLocaleString()} students)</span>
        </div>

        <Link href={`/courses/${course.id}`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-border">
            <Image src={course.instructor.avatar} alt={course.instructor.name} fill className="object-cover" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">{course.instructor.name}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-muted">
          <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {course.level}
            </span>
          </div>
          <button onClick={shareOnWhatsApp} className="text-green-500 hover:text-green-600 transition-colors">
            <WhatsAppIcon className="w-5 h-5" />
          </button>
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <span className="text-xl font-black text-foreground">${discountedPrice.toFixed(2)}</span>
                <span className="text-muted-foreground line-through text-sm">${course.price}</span>
              </>
            ) : (
              <span className="text-xl font-black text-foreground">${course.price}</span>
            )}
          </div>
          <Link href={`/courses/${course.id}`} className="text-primary text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            Enroll Now →
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

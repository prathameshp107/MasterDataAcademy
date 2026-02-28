import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-xl font-bold tracking-tight">
                Master Data <span className="gradient-text">Academy</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering the next generation of data professionals through expert-led, 
              practical training and cutting-edge curriculum.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary text-sm transition-colors">Course Catalog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Certifications</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Corporate Training</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Free Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Student Stories</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Instructor Application</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                hello@masterdata.academy
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="mt-6">
                <div className="bg-muted p-4 rounded-2xl">
                  <p className="text-xs font-semibold mb-2">Subscribe to our newsletter</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="bg-white border border-border rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button className="bg-primary text-white text-xs px-3 py-2 rounded-lg font-bold">Join</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Master Data Academy. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

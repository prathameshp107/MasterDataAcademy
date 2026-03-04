import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BadgeCheck, CalendarDays, Download, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

const DUMMY_CERTIFICATES = [
  {
    id: 'MDA-2026-001',
    course: 'Mastering Python for Data Science',
    issueDate: 'March 01, 2026',
    score: '96%',
    level: 'Professional',
  },
  {
    id: 'MDA-2026-002',
    course: 'Advanced Machine Learning with PyTorch',
    issueDate: 'February 18, 2026',
    score: '92%',
    level: 'Advanced',
  },
  {
    id: 'MDA-2026-003',
    course: 'AWS Certified Data Analytics Specialist',
    issueDate: 'January 29, 2026',
    score: '94%',
    level: 'Expert',
  },
];

export default function CertificationsPage() {
  const featuredCertificate = DUMMY_CERTIFICATES[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden bg-white border-b border-border">
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[340px] w-[340px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-primary/10 text-primary border-none px-6 py-2 rounded-full font-bold mb-6 uppercase tracking-widest text-xs">
            Certifications Hub
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[0.95]">
            Showcase Your
            <br />
            Data Credentials
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse your issued certifications, preview branded credentials, and share a verified record of your achievements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-xl bg-white overflow-hidden">
              <div className="p-6 md:p-8 border-b border-border flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black">My Certificates</h2>
                  <p className="text-sm text-muted-foreground mt-1">Dummy data for now, ready to connect to real user records.</p>
                </div>
                <Badge className="bg-secondary/10 text-secondary border-none px-4 py-1 rounded-full">
                  {DUMMY_CERTIFICATES.length} Issued
                </Badge>
              </div>
              <CardContent className="p-6 md:p-8 space-y-4">
                {DUMMY_CERTIFICATES.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-2xl border border-border p-5 bg-slate-50/80 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">{cert.id}</p>
                        <h3 className="text-lg font-black">{cert.course}</h3>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="w-4 h-4 text-primary" />
                            Issued {cert.issueDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Trophy className="w-4 h-4 text-primary" />
                            Score {cert.score}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-primary" />
                            {cert.level}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="rounded-full px-6 font-bold">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-2xl overflow-hidden bg-white">
              <div className="p-7 border-b border-border bg-gradient-to-r from-primary to-secondary text-white">
                <p className="text-xs uppercase tracking-[0.18em] font-bold opacity-90 mb-2">Certificate Preview</p>
                <h3 className="text-2xl font-black">Master Data Academy</h3>
              </div>
              <CardContent className="p-7">
                <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-slate-50 p-8 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">Certificate of Completion</p>
                  <h4 className="text-3xl font-black mb-2">Alex Johnson</h4>
                  <p className="text-sm text-muted-foreground mb-7">
                    has successfully completed
                  </p>
                  <p className="text-xl font-black mb-7">{featuredCertificate.course}</p>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-xl bg-white p-3 border border-border">
                      <p className="text-muted-foreground font-semibold">Certificate ID</p>
                      <p className="font-black mt-1">{featuredCertificate.id}</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-border">
                      <p className="text-muted-foreground font-semibold">Score</p>
                      <p className="font-black mt-1">{featuredCertificate.score}</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-border">
                      <p className="text-muted-foreground font-semibold">Level</p>
                      <p className="font-black mt-1">{featuredCertificate.level}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button className="rounded-xl h-11 font-bold gradient-bg border-none">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="rounded-xl h-11 font-bold">
                    <BadgeCheck className="w-4 h-4 mr-2" />
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-none shadow-md bg-slate-900 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-1">Verification Ready</h4>
                    <p className="text-sm text-slate-300">
                      Every certificate includes a unique ID and can be verified by employers with a secure public lookup page.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

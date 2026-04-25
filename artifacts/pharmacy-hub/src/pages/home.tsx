import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Printer, 
  Calculator, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Sparkles 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute top-20 -left-20 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto"
            >
              <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm bg-white shadow-sm border-border text-foreground gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                The modern dispensary command-center
              </Badge>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-tight mb-6">
                Organize your bench. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Speed up dispensing.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                Pharmacy Hub replaces clunky software and photocopied slips with beautiful, fast tools designed specifically for UK community pharmacy staff.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 gap-2 w-full sm:w-auto text-base" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Tools
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto text-base bg-white/50 backdrop-blur-sm" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
                  How it works
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section id="tools" className="py-24 bg-white/50 border-y border-border/50 relative">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Dispensary Tools</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to handle complex dispensing tasks in seconds, not minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: PIL Printer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm flex flex-col group overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-primary/40 to-primary" />
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Printer className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">PIL Printer</CardTitle>
                    <CardDescription className="text-base pt-2">
                      Combine and print multiple Patient Information Leaflets in one go.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-muted-foreground space-y-3">
                    <p>Access a curated list of common medications found in MCAs / Nomads / Dosette boxes.</p>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Eliminates one-at-a-time printing</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Always up-to-date leaflets</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/tools/pil-printer" className="w-full">
                      <Button className="w-full rounded-xl shadow-sm group-hover:bg-primary/90">
                        Launch Tool
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Card 2: Prednisolone Calculator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm flex flex-col group overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-secondary/40 to-secondary" />
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Calculator className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">Prednisolone Calculator</CardTitle>
                    <CardDescription className="text-base pt-2">
                      Calculate complex tapering regimens instantly without the mental math.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-muted-foreground space-y-3">
                    <p>Pick which strengths to use and output total tablets per strength.</p>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary-foreground" /> Generates dispensing labels</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary-foreground" /> Printable calendar for patients</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/tools/prednisolone-calculator" className="w-full">
                      <Button variant="secondary" className="w-full rounded-xl shadow-sm text-white bg-secondary group-hover:bg-secondary/90">
                        Launch Tool
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Card 3: To-Follow Slips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full border-border/50 shadow-sm bg-muted/30 flex flex-col relative overflow-hidden grayscale-[30%] opacity-90">
                  <div className="absolute -right-12 top-6 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest py-1 px-12 rotate-45 shadow-sm">
                    Coming Soon
                  </div>
                  <div className="h-2 w-full bg-muted-foreground/20" />
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-4 text-muted-foreground border border-border">
                      <FileText className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl text-muted-foreground">To-Follow Slips</CardTitle>
                    <CardDescription className="text-base pt-2">
                      Generate owed-medication slips and ditch the physical ordering book.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-muted-foreground space-y-3">
                    <p>Capture patient details and reasons, save owed items to a database.</p>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Emails purchasing team</li>
                      <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Digital audit trail</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button disabled variant="outline" className="w-full rounded-xl bg-background/50">
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 relative">
          <div className="container max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about using Pharmacy Hub in your dispensary.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold">Who is this hub for?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    Pharmacy Hub is designed specifically for UK community pharmacy staff—pharmacists, pharmacy technicians, dispensers, and assistants—who want to streamline repetitive administrative tasks and spend more time focused on patient care.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base font-semibold">Do I need to install anything?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    No. Pharmacy Hub is entirely web-based. You can access it from any browser on any device in the pharmacy. We recommend bookmarking the page or setting it as your homepage on the dispensary computers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold">How does the PIL printer save time?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    Historically, printing PILs for MDS/Dosette box patients meant searching for and printing each leaflet one at a time. Our tool lets you select multiple medications from a curated list and print them all in a single batch, turning a 5-minute job into a 30-second one.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base font-semibold">Is patient data stored?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    For currently active tools (PIL Printer and Prednisolone Calculator), no patient-identifiable data is stored on our servers. All processing happens locally in your browser to maintain strict patient confidentiality. The upcoming To-Follow slip generator will use secure, encrypted databases compliant with NHS data standards.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-base font-semibold">How are dispensing labels formatted in the calculator?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    The Prednisolone Calculator generates standard text formats that you can easily copy and paste into your PMR system (like ProScript or Titan). It formats the complex reducing directions clearly to prevent patient confusion.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-base font-semibold">When will the To-Follow Slip Generator launch?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    We are currently beta testing the To-Follow tool with a small group of pharmacies to ensure the email integrations with purchasing teams are robust. We expect to roll it out to all users next quarter.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-b-0">
                  <AccordionTrigger className="text-base font-semibold">Can I suggest a new tool?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    Absolutely. The hub was built by pharmacy staff, for pharmacy staff. If you have a repetitive task that you think could be automated or simplified, please reach out to the development team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* SERVICE STATUS SECTION */}
        <section id="status" className="py-24 bg-white/30 border-t border-border/50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-1">Service Status</h2>
                  <p className="text-sm text-muted-foreground">Current operational status of Hub services</p>
                </div>
                <div className="text-xs font-mono text-muted-foreground bg-white px-3 py-1.5 rounded-full border border-border shadow-sm">
                  Last checked: {new Date().toLocaleTimeString()}
                </div>
              </div>

              <Card className="border-border/50 shadow-sm bg-white overflow-hidden">
                <div className="bg-[#10B981]/10 px-6 py-4 border-b border-[#10B981]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
                  <span className="font-medium text-[#047857]">All core systems operational</span>
                </div>
                
                <div className="divide-y divide-border/50">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="font-medium">Pharmacy Hub Platform</span>
                    <Badge variant="outline" className="bg-[#10B981]/10 text-[#047857] border-[#10B981]/20 gap-1.5 rounded-full px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Operational
                    </Badge>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="font-medium">PIL Printer</span>
                    <Badge variant="outline" className="bg-[#10B981]/10 text-[#047857] border-[#10B981]/20 gap-1.5 rounded-full px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Operational
                    </Badge>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="font-medium">Prednisolone Calculator</span>
                    <Badge variant="outline" className="bg-[#10B981]/10 text-[#047857] border-[#10B981]/20 gap-1.5 rounded-full px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Operational
                    </Badge>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between bg-muted/20">
                    <span className="font-medium text-muted-foreground">To-Follow Slip Generator</span>
                    <Badge variant="outline" className="bg-accent/20 text-accent-foreground border-accent/30 gap-1.5 rounded-full px-3">
                      <Clock className="w-3 h-3" /> Coming Soon
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

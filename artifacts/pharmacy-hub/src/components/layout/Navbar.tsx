import * as React from "react";
import { Link } from "wouter";
import { 
  Cross, 
  Menu,
  ChevronDown,
  Printer,
  Calculator,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
        <Cross className="w-4 h-4 text-white" />
      </div>
      <span className="font-display font-semibold text-lg tracking-tight text-foreground">
        Pharmacy Hub
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" className="rounded-full font-medium" onClick={() => scrollTo('hero')}>
            Home
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full font-medium gap-1">
                Tools <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72 rounded-xl p-2 shadow-lg">
              <Link href="/tools/pil-printer">
                <DropdownMenuItem className="rounded-lg p-3 cursor-pointer gap-3 focus:bg-primary/5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">PIL Printer</div>
                    <div className="text-xs text-muted-foreground">Print multiple leaflets instantly</div>
                  </div>
                </DropdownMenuItem>
              </Link>
              
              <Link href="/tools/prednisolone-calculator">
                <DropdownMenuItem className="rounded-lg p-3 cursor-pointer gap-3 focus:bg-secondary/10 mt-1">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Prednisolone Calculator</div>
                    <div className="text-xs text-muted-foreground">Tapering regimens made easy</div>
                  </div>
                </DropdownMenuItem>
              </Link>
              
              <DropdownMenuItem disabled className="rounded-lg p-3 gap-3 mt-1 opacity-60">
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-sm flex items-center gap-2">
                    To-Follow Slips
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-1.5 py-0.5 rounded-sm">Soon</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Digital owed-medication slips</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="rounded-full font-medium" onClick={() => scrollTo('faq')}>
            FAQ
          </Button>
          <Button variant="ghost" className="rounded-full font-medium" onClick={() => scrollTo('status')}>
            Service Status
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-10">
                <button onClick={() => scrollTo('hero')} className="text-left text-lg font-medium p-2 rounded-lg hover:bg-muted transition-colors">
                  Home
                </button>
                
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-2">Tools</div>
                  <div className="flex flex-col gap-1">
                    <Link href="/tools/pil-printer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Printer className="w-4 h-4" />
                      </div>
                      <span className="font-medium">PIL Printer</span>
                    </Link>
                    <Link href="/tools/prednisolone-calculator" className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <span className="font-medium">Prednisolone Calculator</span>
                    </Link>
                    <div className="flex items-center gap-3 p-2 rounded-lg opacity-60 grayscale">
                      <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">To-Follow Slips</span>
                        <span className="text-xs text-accent-foreground font-semibold">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={() => scrollTo('faq')} className="text-left text-lg font-medium p-2 rounded-lg hover:bg-muted transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollTo('status')} className="text-left text-lg font-medium p-2 rounded-lg hover:bg-muted transition-colors">
                  Service Status
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

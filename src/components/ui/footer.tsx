import { Heart, Code, Coffee } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text mb-6">Umer Developer</div>

          {/* Quote */}
          <blockquote className="text-muted-foreground italic max-w-2xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad."
            <footer className="text-sm mt-2">- Cory House</footer>
          </blockquote>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>powered by</span>
            <Coffee className="w-4 h-4 text-amber-500" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground pt-4 border-t border-border/30">
            © {currentYear} Umer Developer. All rights reserved.
          </div>

          {/* Back to top hint */}
          <div className="text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
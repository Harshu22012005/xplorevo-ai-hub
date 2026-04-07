import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/xtn-logo.png";

const Navbar = ({ onSearch }: { onSearch?: (query: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (val: string) => {
    setSearch(val);
    onSearch?.(val);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Your AI Buddie" className="h-9 w-9 rounded-md object-cover" />
          <span className="font-heading font-bold text-lg text-gradient hidden sm:block">Your AI Buddie</span>
        </Link>

        <div className="hidden md:flex items-center bg-muted rounded-lg px-3 py-1.5 w-80">
          <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search AI tools..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#tools" className="text-muted-foreground hover:text-foreground transition-colors">Tools</a>
          <a href="/#categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</a>
          <a href="/#youtube" className="text-muted-foreground hover:text-foreground transition-colors">AI Learning</a>
          <a href="/#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <div className="flex items-center bg-muted rounded-lg px-3 py-1.5">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            />
          </div>
          <a href="/#tools" className="block text-muted-foreground hover:text-foreground text-sm" onClick={() => setMobileOpen(false)}>Tools</a>
          <a href="/#categories" className="block text-muted-foreground hover:text-foreground text-sm" onClick={() => setMobileOpen(false)}>Categories</a>
          <a href="/#youtube" className="block text-muted-foreground hover:text-foreground text-sm" onClick={() => setMobileOpen(false)}>AI Learning</a>
          <a href="/#community" className="block text-muted-foreground hover:text-foreground text-sm" onClick={() => setMobileOpen(false)}>Community</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

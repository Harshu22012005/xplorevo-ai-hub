import logo from "@/assets/xtn-logo.png";

const sections = [
  { title: "About", links: ["Our Mission", "Team", "Blog", "Careers"] },
  { title: "AI Tools", links: ["Directory", "Featured", "Trending", "New Tools"] },
  { title: "Categories", links: ["Writing", "Graphics", "Video", "Automation"] },
  { title: "Resources", links: ["Startup Guide", "API Docs", "Comparisons", "Newsletter"] },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="XTN" className="w-10 h-10 rounded-lg mb-3" />
            <p className="text-muted-foreground text-xs leading-relaxed">
              Xplorevo Tech Network – Your gateway to the best AI tools for startups and innovation.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs mb-1">Prepared By</p>
          <p className="text-foreground text-sm font-heading font-semibold">Mr. Harshad Harishchandra Pakhale</p>
          <p className="text-muted-foreground text-xs">Founder & CEO – Xplorevo Tech Network</p>
          <p className="text-muted-foreground text-[10px] mt-4">© 2024 Xplorevo Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

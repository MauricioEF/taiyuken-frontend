import Badge from "./components/badge";
import { BADGES } from "./Hero.constants";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-(--navbar-height)">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616093700899-dddbfc0fe7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb24lMjBsaWdodHN8ZW58MXx8fHwxNzc0Nzg3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gaming Setup"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black/90"
          style={{ backgroundColor: 'hsl(var(--bg) / 0.7)' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-7xl mb-6 tracking-tight tex-text"
        >
          Small Games
          <br />
          <span style={{ color: 'hsl(var(--brand))' }}>Strong experiences</span>
        </h1>
        <p className="text-text text-2xl">We design an experience to every player across all platforms.</p>
        <div className="flex justify-between pt-20 gap-10">
          {BADGES.map(badge=><Badge key={badge.label} {...badge}/>)}
        </div>
      </div>

    </section>
  );
};

export default Hero;

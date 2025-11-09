import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette } from "lucide-react";
import { Scene } from "@/components/ui/rubik-s-cube";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Rubik's Cube Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/60 z-10" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse z-10" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent/15 rounded-full blur-lg animate-pulse delay-1000 z-10" />
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-primary-glow/10 rounded-full blur-md animate-pulse delay-500 z-10" />
      
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon Badges */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Desenvolvimento</span>
            </div>
            <div className="flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2">
              <Palette className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Design</span>
            </div>
          </div>
          
          {/* Company Name */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground/80">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                EVO LINK
              </span>
            </h2>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Transformando{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Ideias
            </span>{" "}
            em{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Websites Incríveis
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor web especializado em criar experiências digitais que 
            <span className="font-semibold text-foreground"> convertem visitantes em clientes</span>. 
            Foco em performance, design moderno e resultados mensuráveis.
          </p>
          
          {/* Value Proposition */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Sites Responsivos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>SEO Otimizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full" />
              <span>Performance Elevada</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 min-w-[200px]"
              onClick={() => {
                const portfolioSection = document.getElementById("portfolio");
                portfolioSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 min-w-[200px] bg-background/5 backdrop-blur-sm border-border hover:bg-background/10 text-foreground hover:text-foreground"
            >
              Entrar em Contato
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="pt-12 space-y-4">
            <p className="text-muted-foreground text-sm">Confiado por empresas e empreendedores</p>
            <div className="flex justify-center gap-8 text-muted-foreground">
              <span className="text-2xl font-bold text-primary">50+</span>
              <span className="text-sm">Projetos<br/>Entregues</span>
              <span className="text-2xl font-bold text-accent">98%</span>
              <span className="text-sm">Satisfação<br/>dos Clientes</span>
              <span className="text-2xl font-bold text-primary-glow">5⭐</span>
              <span className="text-sm">Avaliação<br/>Média</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
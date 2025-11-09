import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    name: "RM Refrigeração",
    description: "Sistema de autenticação e gestão para empresa de refrigeração",
    url: "https://rmrefrgeracaocom.vercel.app/auth",
    category: "Web App"
  },
  {
    name: "Leads One",
    description: "Plataforma de gestão de leads e conversões",
    url: "https://leads-one-umber.vercel.app/",
    category: "SaaS"
  },
  {
    name: "IBAE São Benedito",
    description: "Website Feito Para Igreja",
    url: "https://ibaesaobene.vercel.app/",
    category: "Website"
  },
  {
    name: "JB Renda Extra",
    description: "Plataforma de hora extra do posto JBretas",
    url: "https://vercel.com/dutras-projects-a1591857/jbretasextra",
    category: "E-commerce"
  },
  {
    name: "Sole City BR",
    description: "Plataforma de vendas e catálogo de produtos",
    url: "https://vercel.com/dutras-projects-a1591857/solecitybr",
    category: "E-commerce"
  },
  {
    name: "EVO LINK",
    description: "Plataforma de administração de estoque para revenda",
    url: "https://www.evoolink.site/auth",
    category: "Web App"
  }
];

const PortfolioSection = () => {
  const handleVisitProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="mb-4">
            Portfólio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projetos{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore alguns dos projetos que desenvolvemos com excelência e atenção aos detalhes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                  </div>
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs w-fit">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  onClick={() => handleVisitProject(project.url)}
                  variant="outline"
                  className="w-full group/btn hover:bg-primary/10 hover:border-primary/50 transition-all"
                  size="lg"
                >
                  Visitar Projeto
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Todos os projetos foram desenvolvidos pela{" "}
            <span className="font-semibold text-foreground bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              EVO LINK
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


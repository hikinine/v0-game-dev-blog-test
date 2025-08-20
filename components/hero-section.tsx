import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
          Desenvolvimento de Games
          <span className="text-primary block">Descomplicado</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Tutoriais, devlogs e recursos técnicos para desenvolvedores indie. Aprenda a criar jogos incríveis com as
          melhores práticas da indústria.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8">
            Explorar Tutoriais
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            Ver Devlogs
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-2">Tutoriais Práticos</h3>
            <p className="text-muted-foreground">Aprenda com exemplos reais e projetos completos</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-2">Devlogs Detalhados</h3>
            <p className="text-muted-foreground">Acompanhe o processo de criação de jogos reais</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg mb-2">Comunidade Ativa</h3>
            <p className="text-muted-foreground">Conecte-se com outros desenvolvedores indie</p>
          </div>
        </div>
      </div>
    </section>
  )
}

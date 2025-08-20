import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Sparkles } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Fique por Dentro das Novidades
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Receba tutoriais exclusivos, devlogs e recursos diretamente no seu email. Sem spam, apenas conteúdo de
              qualidade para desenvolvedores.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Seu melhor email" className="flex-1" />
              <Button className="sm:w-auto">
                <Sparkles className="mr-2 h-4 w-4" />
                Inscrever-se
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">Mais de 1.000 desenvolvedores já se inscreveram</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

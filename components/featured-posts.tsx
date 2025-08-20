import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "Como Criar um Sistema de Inventário em Unity",
    excerpt: "Aprenda a implementar um sistema de inventário completo e flexível para seus jogos RPG.",
    category: "Tutorial",
    readTime: "15 min",
    date: "2024-01-15",
    image: "/unity-inventory-system.png",
  },
  {
    id: 2,
    title: "Devlog #5: Implementando IA para NPCs",
    excerpt: "Processo completo de criação de comportamentos inteligentes para personagens não-jogáveis.",
    category: "Devlog",
    readTime: "8 min",
    date: "2024-01-12",
    image: "/game-ai-npc-behavior-tree.png",
  },
  {
    id: 3,
    title: "Otimização de Performance em Jogos 2D",
    excerpt: "Técnicas essenciais para manter seu jogo rodando suavemente em diferentes dispositivos.",
    category: "Tutorial",
    readTime: "12 min",
    date: "2024-01-10",
    image: "/2d-game-optimization.png",
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Posts em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo selecionado para acelerar seu aprendizado em desenvolvimento de games
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                  Ler mais
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Todos os Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, Gamepad2 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-serif font-bold text-foreground">sixxxy</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Tutoriais
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Devlogs
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
        </nav>

        {/* Search and Mobile Menu */}
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar posts..." className="w-64 pl-10" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

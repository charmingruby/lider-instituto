import { BookHeart, Gem, Home, Library, MessageSquareQuote } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  icon: ElementType
  label: string
  url: string
}

export const navItemsList: NavItemProps[] = [
  {
    icon: Home,
    label: 'Início',
    url: '/',
  },
  { icon: Gem, label: 'O que oferecemos', url: '/' },
  { icon: BookHeart, label: 'Nossa história', url: '/' },
  { icon: Library, label: 'Cursos', url: '/' },
  { icon: MessageSquareQuote, label: 'Relatos', url: '/' },
]

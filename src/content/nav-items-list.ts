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
  { icon: Gem, label: 'O que oferecemos', url: '#o-que-oferecemos' },
  { icon: BookHeart, label: 'Nossa história', url: '#historia' },
  { icon: Library, label: 'Cursos', url: '#cursos' },
  { icon: MessageSquareQuote, label: 'Relatos', url: '#relatos' },
]

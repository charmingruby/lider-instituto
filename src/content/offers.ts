import {
  Cuboid,
  DollarSign,
  GraduationCap,
  Hand,
  Syringe,
  Users2,
} from 'lucide-react'
import { ElementType } from 'react'

export interface Offer {
  icon: ElementType
  title: string
  description: string
}

const offers: Offer[] = [
  {
    icon: GraduationCap,
    title: 'Formação de Qualidade',
    description:
      'Precursores dos cursos de pós-graduação em odontologia no nosso estado',
  },
  {
    icon: Cuboid,
    title: 'Estrutura de Ponta',
    description:
      'Valorizamos uma estrutura que agregue positivamente aos nossos alunos.',
  },
  {
    icon: Users2,
    title: 'Professores Qualificados',
    description: 'Nossa coordenação é composta de mestres e doutores.',
  },
  {
    icon: Hand,
    title: 'Técnicas Atualizadas',
    description: 'Sempre estamos alinhados com o que há de novo no mercado.',
  },
  {
    icon: Syringe,
    title: 'Práticas Clínicas',
    description:
      'Damos a oportunidade ao aluno de aplicar todo o conhecimento obtido durante o curso.',
  },
  {
    icon: DollarSign,
    title: 'Planos Acessíveis',
    description:
      'Disponibilizamos diversos planos de pagamento para nossos cursos.',
  },
]

export { offers }

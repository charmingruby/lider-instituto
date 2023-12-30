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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
  {
    icon: Users2,
    title: 'Professores Qualificados',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
  {
    icon: Hand,
    title: 'Técnicas Atualizadas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
  {
    icon: Syringe,
    title: 'Práticas Clínicas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
  {
    icon: DollarSign,
    title: 'Planos Acessíveis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
]

export { offers }

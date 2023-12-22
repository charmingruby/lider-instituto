import { Users2 } from 'lucide-react'
import { ElementType } from 'react'

interface Offer {
  icon: ElementType
  title: string
  description: string
}

const offers: Offer[] = [
  {
    icon: Users2,
    title: 'Titulo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
  {
    icon: Users2,
    title: 'Titulo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
  {
    icon: Users2,
    title: 'Titulo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ratione cupiditate. Doloremque officia id facilis, nihil ratione veniam recusandae nobis est aperiam, blanditiis enim natus provident alias modi ex!',
  },
]

export { offers }

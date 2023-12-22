import clinicImg from '@/assets/img/clinic.jpeg'
import classroomImg from '@/assets/img/classroom.jpeg'
import { StaticImageData } from 'next/image'

interface Story {
  url: StaticImageData
  alt: string
}

const stories: Story[] = [
  { alt: 'Imagem da clinica.', url: clinicImg },
  { alt: 'Imagem da sala de aula.', url: classroomImg },
]

export { stories }

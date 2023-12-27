import { StaticImageData } from 'next/image'
import clinic1 from '@/assets/img/mosaic/clinic-1.jpeg'
import clinic2 from '@/assets/img/mosaic/clinic-2.jpeg'
import room from '@/assets/img/mosaic/room.jpeg'

interface MosaicImage {
  alt: string
  url: StaticImageData
}

const mosaicImages: MosaicImage[] = [
  {
    url: clinic1,
    alt: 'Imagem do consultório 1',
  },
  {
    url: clinic2,
    alt: 'Imagem do consultório 2',
  },
  {
    url: room,
    alt: 'Imagem do escritório',
  },
]

export { mosaicImages }

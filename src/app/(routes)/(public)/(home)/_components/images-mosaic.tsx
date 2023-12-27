import { mosaicImages } from '@/content/mosaic-images'
import Image from 'next/image'

export function ImagesMosaic() {
  const firstClinicImage = mosaicImages[0]
  const secondClinicImage = mosaicImages[1]
  const officeImage = mosaicImages[2]

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="mt-8">
        <Image
          className="h-72 rounded-md"
          alt={firstClinicImage.alt}
          src={firstClinicImage.url}
        />
      </div>

      <div className="mt-16">
        <Image
          className="h-72 rounded-md"
          alt={secondClinicImage.alt}
          src={secondClinicImage.url}
        />
      </div>

      <div>
        <Image
          className="h-72 rounded-md"
          alt={officeImage.alt}
          src={officeImage.url}
        />
      </div>
    </div>
  )
}

import { stories } from '@/content/stories'
import Image from 'next/image'

export function StoryAlbum() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stories.map(({ alt, url }, idx) => (
        <Image
          key={alt}
          src={url}
          alt={alt}
          className={`${idx === 0 ? 'mt-8' : 'mb-8'} rounded-md`}
        />
      ))}
    </div>
  )
}

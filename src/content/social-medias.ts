import { facebookLink, instagramLink } from '@/site'
import { Facebook, Instagram, LucideIcon } from 'lucide-react'

interface SocialMedia {
  name: string
  icon: LucideIcon
  url: string
}

const socialMedias: SocialMedia[] = [
  {
    icon: Facebook,
    name: 'Facebook',
    url: facebookLink,
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: instagramLink,
  },
]

export { socialMedias }

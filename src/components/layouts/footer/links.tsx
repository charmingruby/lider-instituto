import { LinkSection, LinkSectionProps } from './link-section'
import { facebookLink, instagramLink } from '@/site'

const socialSection: LinkSectionProps = {
  title: 'Redes',
  links: [
    {
      label: 'Instagram',
      url: instagramLink,
    },
    {
      label: 'Facebook',
      url: facebookLink,
    },
  ],
}

export function Links() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-end gap-6 lg:gap-12">
      <LinkSection title={socialSection.title} links={socialSection.links} />
    </div>
  )
}

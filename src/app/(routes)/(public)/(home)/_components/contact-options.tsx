import { contactOptions } from '@/content/contact-options'
import { socialMedias } from '@/content/social-medias'
import Link from 'next/link'

export function ContactOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contactOptions.map(({ title, content }) => (
        <div className="flex flex-col" key={title}>
          <strong className="text-lg mb-1">{title}</strong>
          <small className="font-medium">{content}</small>
        </div>
      ))}

      {/* Social Medias */}
      <div>
        <strong className="text-lg mb-1 block">Siga nossas redes</strong>

        <div className="flex items-center gap-2">
          {socialMedias.map(({ icon: Icon, name, url }) => (
            <Link
              prefetch={false}
              className="border p-2 rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              key={name}
              href={url}
              target="_blank"
            >
              <Icon strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

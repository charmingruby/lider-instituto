import { MaxWidthContainer } from '@/components/ui/max-width-container'
import { BrandPresentation } from './brand-presentation'
import { Copyright } from './copyright'
import { Links } from './links'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-white">
      <Separator />

      <MaxWidthContainer
        spacing="spaceless"
        className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <BrandPresentation />
        <Links />
      </MaxWidthContainer>

      <Separator />

      <MaxWidthContainer className="py-8" spacing="spaceless">
        <Copyright />
      </MaxWidthContainer>
    </footer>
  )
}

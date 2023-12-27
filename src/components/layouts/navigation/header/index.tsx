import { BrandLogo } from './brand-logo'
import { Navigation } from './navigation'
import { ButtonGroup } from './button-group'
import { BurguerButton } from './burguer-button'
import { MaxWidthContainer } from '@/components/ui/max-width-container'

export function Header() {
  return (
    <header className="shadow-md bg-white h-16 fixed w-full z-50 top-0 bg-gray-75">
      <MaxWidthContainer spacing="spaceless">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <BrandLogo />
            <Navigation />
          </div>
          <ButtonGroup />
          <BurguerButton />
        </div>
      </MaxWidthContainer>
    </header>
  )
}

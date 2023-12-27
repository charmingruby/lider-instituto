'use client'

import { useContext } from 'react'
import { MenuContext } from '@/contexts/menu-context'
import { DrawerItem } from './drawer-item'
import { DrawerActions } from './drawer-actions'
import { MaxWidthContainer } from '@/components/ui/max-width-container'
import { navItemsList } from '@/content/nav-items-list'

export function Drawer() {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`h-screen pt-24 pb-8 w-full bg-background fixed transition-all ${
        isOpen ? 'z-50 opacity-100' : '-z-10 opacity-0'
      }`}
    >
      <MaxWidthContainer
        spacing="spaceless"
        className="flex flex-col gap-1 h-full divide-y divide-primary-light"
      >
        {navItemsList.map(({ icon: Icon, label, url }) => (
          <DrawerItem icon={Icon} label={label} url={url} key={label} />
        ))}

        <DrawerActions />
      </MaxWidthContainer>
    </div>
  )
}

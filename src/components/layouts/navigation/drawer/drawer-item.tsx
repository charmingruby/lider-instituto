'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { MenuContext } from '@/contexts/menu-context'
import { ChevronRight } from 'lucide-react'
import { NavItemProps } from '@/content/nav-items-list'

export function DrawerItem({ icon: Icon, label, url }: NavItemProps) {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <Link
      prefetch={false}
      href={url}
      key={label}
      onClick={toggleMenu}
      className="flex items-center gap-2 py-3 px-4 hover:bg-primary/60 transition-colors rounded-sm group"
    >
      <Icon className=" h-6 w-6 transition-colors" />
      <span className=" text-lg font-medium transition-colors">{label}</span>
      <ChevronRight className="ml-auto  transition-colors" />
    </Link>
  )
}

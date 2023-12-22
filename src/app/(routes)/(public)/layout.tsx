import { PropsWithChildren } from 'react'

import { ContactWidget } from '@/components/contact-widget'
import { Drawer } from './_components/navigation/drawer'
import { Footer } from './_components/footer'
import { Header } from './_components/navigation/header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <main className="overflow-x-auto">
      <Drawer />
      <Header />
      <ContactWidget />
      <div className="max-w-[100vw]">{children}</div>
      <Footer />
    </main>
  )
}

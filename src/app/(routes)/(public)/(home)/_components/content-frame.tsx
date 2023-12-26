import { Separator } from '@/components/ui/separator'
import { PropsWithChildren } from 'react'

export function ContentFrame({ children }: PropsWithChildren) {
  return (
    <div className="space-y-16">
      <Separator />
      {children}
      <Separator />
    </div>
  )
}

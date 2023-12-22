import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
}

export function Text({ children, className }: TextProps) {
  return (
    <p className={cn('text-base text-foreground leading-relaxed', className)}>
      {children}
    </p>
  )
}

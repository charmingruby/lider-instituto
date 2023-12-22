import { cn } from '@/lib/utils'

interface HeadingProps {
  content: string
  className?: string
}

export function Heading({ content, className }: HeadingProps) {
  return <h2 className={cn('text-3xl font-semibold', className)}>{content}</h2>
}

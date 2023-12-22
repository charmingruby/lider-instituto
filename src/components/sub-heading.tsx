import { cn } from '@/lib/utils'

interface HeadingProps {
  content: string
  className?: string
}

export function SubHeading({ content, className }: HeadingProps) {
  return (
    <h2 className={cn('text-sm text-gray-400 font-medium', className)}>
      <span className="text-primary text-base">-</span> {content}
    </h2>
  )
}

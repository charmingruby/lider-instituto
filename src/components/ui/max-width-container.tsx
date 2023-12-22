import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const maxWidthContainerVariants = cva(
  'sm:max-w-[84rem] px-4 lg:px-6 w-full sm:mx-auto',
  {
    variants: {
      spacing: {
        default: 'py-10 lg:py-20',
        spaceless: 'py-0',
        lg: 'py-24',
      },
    },
    defaultVariants: {
      spacing: 'default',
    },
  },
)

export interface MaxWidthContainerProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof maxWidthContainerVariants> {}

export function MaxWidthContainer({
  spacing,
  className,
  ...props
}: MaxWidthContainerProps) {
  return (
    <div
      className={cn(maxWidthContainerVariants({ className, spacing }))}
      {...props}
    />
  )
}

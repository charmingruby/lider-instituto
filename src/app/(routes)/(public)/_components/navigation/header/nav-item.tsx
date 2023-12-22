import Link from 'next/link'

interface NavItemProps {
  label: string
  url: string
}

export function NavItem({ label, url }: NavItemProps) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="border-white font-medium text-muted-foreground hover:text-primary transition-colorsfont-medium group flex items-center border-b-2 h-16 transition-colors cursor-pointer"
    >
      <span>{label}</span>
    </Link>
  )
}

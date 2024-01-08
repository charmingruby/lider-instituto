import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ButtonGroup() {
  return (
    <div className="items-center gap-2 hidden lg:flex lg:items-center ">
      <Link href="#contato" prefetch={false}>
        <Button className="text-base" variant="outline">
          Entre em contato
        </Button>
      </Link>
    </div>
  )
}

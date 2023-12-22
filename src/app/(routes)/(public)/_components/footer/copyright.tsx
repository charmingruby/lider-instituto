import { enterpriseName } from '@/site'
import Link from 'next/link'

export function Copyright() {
  return (
    <div className="text-muted-foreground text-sm">
      © Copyright 2023,{' '}
      <Link href="/" prefetch={false} className="underline underline-offset-4">
        {enterpriseName}
      </Link>
      . Todos direitos reservados.
    </div>
  )
}

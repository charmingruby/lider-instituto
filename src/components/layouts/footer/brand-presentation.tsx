import Image from 'next/image'
import logo from '@/assets/img/logo.png'
import { ArrowUpRight, AtSign, Building, Phone } from 'lucide-react'
import Link from 'next/link'
import { address, email, enterpriseName, mapLink } from '@/site'

export function BrandPresentation() {
  return (
    <div className="flex flex-col">
      <Image src={logo} alt="Logo" className="w-24 mb-2" />
      <h2 className="font-bold text-2xl mb-4 lg:mb-6">{enterpriseName}</h2>

      <div className="flex flex-col gap-3 text-muted-foreground">
        {/* Address */}
        <Link
          href={mapLink}
          target="_blank"
          prefetch={false}
          className="flex items-center gap-2 hover:text-primary hover:underline transition-all"
        >
          <Building className="h-4 w-4" />
          <small className="items-center text-sm font-medium flex md:gap-2">
            {address}
            <ArrowUpRight className="w-4 h-4 hidden lg:block" />
          </small>
        </Link>

        {/* Email */}
        <div className="flex items-center gap-2">
          <AtSign className="h-4 w-4" />
          <small className="text-sm font-medium">{email}</small>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <small className="text-sm font-medium">(71) 99116-2481</small>
        </div>
      </div>
    </div>
  )
}

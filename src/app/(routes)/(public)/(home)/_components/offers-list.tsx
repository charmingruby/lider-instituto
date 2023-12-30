import { offers } from '@/content/offers'
import { DifferentialsCard } from './differentials-card'

export function OffersList() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((item) => (
          <DifferentialsCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

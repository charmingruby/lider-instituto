import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { offers } from '@/content/offers'

export function OffersList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {offers.map(({ icon: Icon, title, description }) => (
        <Card key={title}>
          <CardHeader className="flex items-center gap-2">
            <div className="bg-primary p-3 border-4 border-[#cbe3e5] rounded-full">
              <Icon className="" />
            </div>

            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

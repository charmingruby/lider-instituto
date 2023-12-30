import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Offer } from '@/content/offers'

export function DifferentialsCard({ icon: Icon, title, description }: Offer) {
  return (
    <Card className="w-fit">
      <CardHeader className="flex items-center gap-2">
        <div className="bg-primary p-3 border-4 border-[#cbe3e5] rounded-full">
          <Icon className="" />
        </div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { testimonials } from '@/content/testimonials'
import { Star } from 'lucide-react'

export function TestimonialsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map(({ name, role, text }) => (
        <Card className="h-fit" key={name}>
          <CardHeader>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, idx) => (
                <Star
                  key={idx}
                  className="fill-yellow-300 stroke-yellow-400 h-5 w-5"
                />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">{text}</p>
          </CardContent>

          <CardFooter className="flex flex-col items-start gap-1">
            <strong className="text-base">{name}</strong>
            <small className="text-muted-foreground font-medium">{role}</small>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

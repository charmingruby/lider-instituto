import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { testimonials } from '@/content/testimonials'

export function TestimonialsList() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {testimonials.map(({ name, role, text }) => (
        <Card className="h-fit" key={name}>
          <CardHeader />
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

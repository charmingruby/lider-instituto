import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { courses } from '@/content/courses'
import { Clock, Play } from 'lucide-react'

export function CoursesList() {
  return (
    <div className="flex flex-col gap-12">
      {courses.map(({ title, subcourses }) => (
        <div key={title} className="space-y-4">
          <div className="space-y-2">
            <div className="flex gap-1 items-center">
              <Play className="text-primary fill-primary h-3 w-3" />
              <h3 className="text-2xl font-medium">
                Cursos de{' '}
                <span className="text-primary font-semibold">{title}</span>
              </h3>
            </div>

            <Separator />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {subcourses.map(
              ({
                title,
                observation,
                durationInMonths,
                type,
                coordination,
              }) => (
                <Card key={title}>
                  <CardHeader>
                    {/* Title */}
                    <CardTitle>
                      {title}{' '}
                      {observation ? <span>({observation})</span> : null}
                    </CardTitle>

                    {/* Duration */}
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <CardDescription>
                        {durationInMonths + ' meses'}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {type.map((type) => (
                      <div key={type}>{type}</div>
                    ))}
                  </CardContent>
                  <CardFooter className="">
                    <div className="flex flex-col gap-1">
                      {coordination.map(({ name, role }) => (
                        <div key={name}>
                          {name}
                          {role || null}
                        </div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

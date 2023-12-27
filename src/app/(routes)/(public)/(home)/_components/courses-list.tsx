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
import { BookOpenText, Clock, Play } from 'lucide-react'

export function CoursesList() {
  return (
    <div className="flex flex-col gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcourses.map(
              ({
                title,
                observation,
                durationInMonths,
                type,
                coordination,
              }) => (
                <Card key={title} className="border-t-4 border-t-primary">
                  <CardHeader className="relative">
                    <div className="absolute -translate-y-10 bg-background p-2 border-2 border-primary rounded-full ">
                      <BookOpenText className="h-5 w-5 text-primary" />
                    </div>
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
                  <CardContent className="flex flex-col items-start gap-1">
                    <strong className="font-semibold">
                      Metodologias de ensino
                    </strong>

                    <div className="flex flex-col gap-0.5">
                      {type.map((type) => (
                        <div key={type} className="flex items-center gap-1">
                          <Play className="text-primary h-2 w-2 fill-primary" />
                          <span className="text-sm text-muted-foreground">
                            {type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start gap-2">
                    <strong className="font-semibold">Coordenação</strong>

                    <div className="flex flex-col gap-1">
                      {coordination.map(({ name, role }) => (
                        <div key={name} className="text-sm font-medium">
                          {name}{' '}
                          <small className="text-xs text-muted-foreground">
                            {role || null}
                          </small>
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

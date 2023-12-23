import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { courses } from '@/content/courses'
import { Clock } from 'lucide-react'

export function CoursesList() {
  return (
    <div className="flex flex-col gap-6">
      {courses.map(({ title, subcourses }) => (
        <div key={title} className="space-y-4">
          <h3>{title}</h3>

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
                    <CardTitle>
                      {title}{' '}
                      {observation ? <span>({observation})</span> : null}
                    </CardTitle>

                    <div>
                      <Clock />
                      <CardDescription>
                        {durationInMonths + ' meses'}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

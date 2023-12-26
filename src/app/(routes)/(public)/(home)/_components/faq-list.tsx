import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/content/faq'

export function FAQList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border rounded-lg shadow-sm divide-y-2 divider-border"
    >
      {faqs.map(({ value, title, description }) => (
        <AccordionItem value={value} key={value}>
          <AccordionTrigger className="font-medium text-base">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

import { Clock } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
interface ServiceCardProps {
  title: string
  duration: string
  price: string
  link: string
}

export function ServiceCard({ title, duration, price, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
    <CardContent className="p-6 flex-grow">
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="mr-1 h-4 w-4" />
          <span>{duration}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex items-center justify-between bg-muted/50 p-6 pt-4 mt-auto">
      <div className="font-bold text-lg">{price}</div>
      <Button variant="outline" size="sm" asChild>
        <Link href={link} target="_blank">
          Book Now
        </Link>
      </Button>
    </CardFooter>
  </Card>
  )
}


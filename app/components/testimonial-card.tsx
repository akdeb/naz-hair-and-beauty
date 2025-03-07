import { Star } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TestimonialCardProps {
  name: string
  service: string
  review: string
  date: string
}

export function TestimonialCard({ name, service, review, date }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
    <CardContent className="p-6 flex-grow">
      <div className="flex items-center gap-2 mb-4">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      </div>
      <p className="text-gray-600 mb-4">&quot;{review}&quot;</p>
    </CardContent>
    <CardFooter className="flex items-center justify-between bg-muted/50 p-6 pt-4 mt-auto">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{service}</p>
        </div>
      </div>
      <div className="text-xs text-gray-500">{date}</div>
    </CardFooter>
  </Card>
  )
}


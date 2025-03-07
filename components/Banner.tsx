import { Info } from "lucide-react"

export default function Banner() {
  return (
    <div className="sticky top-0 z-50 w-full bg-yellow-300 text-black py-2">
        <div className="container flex items-center justify-center gap-2 text-sm font-medium">
          <Info className="h-4 w-4" />
          <span>This is a preview of the website.</span>
        </div>
      </div>
  )
}

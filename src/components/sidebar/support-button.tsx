import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LifeBuoy } from "lucide-react"

export function SupportButton() {
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href="/support">
        <LifeBuoy className="h-4 w-4 mr-2" />
      </Link>
    </Button>
  )
}
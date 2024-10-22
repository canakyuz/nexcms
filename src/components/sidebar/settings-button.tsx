import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
export function SettingsButton() {
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href="/settings">
        <Settings className="h-4 w-4 mx-1" />
      </Link>
    </Button>
  )
}
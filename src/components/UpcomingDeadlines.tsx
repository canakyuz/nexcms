import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from 'lucide-react'

const deadlines = [
  { project: "E-commerce Platform", task: "Frontend Development", date: "2024-11-15" },
  { project: "Mobile App Redesign", task: "User Testing", date: "2024-11-20" },
  { project: "Data Analytics Dashboard", task: "Final Review", date: "2024-11-25" },
]

export function UpcomingDeadlines() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <div key={index} className="flex items-center space-x-2 sm:space-x-4">
              <CalendarIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0 space-y-1">
                <p className="text-xs sm:text-sm font-medium truncate">{deadline.project}</p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{deadline.task}</p>
              </div>
              <div className="text-xs sm:text-sm font-medium whitespace-nowrap">{deadline.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
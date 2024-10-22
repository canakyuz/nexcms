import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { LayoutDashboard, CheckCircle, Users, ListTodo } from 'lucide-react'

const metrics = [
  { title: "Total Projects", value: 12, icon: LayoutDashboard },
  { title: "Active Tasks", value: 48, icon: ListTodo },
  { title: "Team Members", value: 24, icon: Users },
  { title: "Completed Projects", value: 7, icon: CheckCircle },
]

export function DashboardMetrics() {
  return (
    <Card className="p-4">
      <CardContent className="p-0 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <metric.icon className="h-8 w-8 mb-2 text-muted-foreground" />
            <span className="text-2xl font-bold">{metric.value}</span>
            <span className="text-sm text-muted-foreground">{metric.title}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
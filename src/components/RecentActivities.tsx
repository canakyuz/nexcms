import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const activities = [
  { user: "John Doe", action: "updated the project status", project: "E-commerce Platform", time: "2 hours ago" },
  { user: "Jane Smith", action: "completed a task", project: "Mobile App Redesign", time: "4 hours ago" },
  { user: "Mike Johnson", action: "added a new team member", project: "Data Analytics Dashboard", time: "Yesterday" },
]

export function RecentActivities() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-2 sm:space-x-4">
              <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium leading-none truncate">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {activity.project} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
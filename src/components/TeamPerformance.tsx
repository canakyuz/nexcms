import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const teamPerformance = [
  { name: "Design Team", progress: 85 },
  { name: "Development Team", progress: 72 },
  { name: "Marketing Team", progress: 90 },
]

export function TeamPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamPerformance.map((team, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{team.name}</span>
                <span className="font-medium">{team.progress}%</span>
              </div>
              <Progress value={team.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  name: string
  status: string
  description: string
  progress: number
  team: string[]
}

export function ProjectCard({ name, status, description, progress, team }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Badge variant={status === "Completed" ? "default" : "secondary"}>
          {status}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="w-full h-2" />
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-muted-foreground mr-2">Team:</span>
          <div className="flex -space-x-2">
            {team.map((member, i) => (
              <Avatar key={i} className="border-2 border-background w-6 h-6">
                <AvatarFallback className="text-xs">{member}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
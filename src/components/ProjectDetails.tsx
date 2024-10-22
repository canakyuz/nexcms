import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectDetailsProps {
  project: {
    name: string
    description: string
    status: string
    progress: number
    members: string[]
    tasks: { id: number; title: string; status: string }[]
    files: { id: number; name: string; type: string }[]
  }
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <Badge>{project.status}</Badge>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p>{project.description}</p>
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700 mb-1">Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tasks">
            <ul>
              {project.tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center py-2">
                  <span>{task.title}</span>
                  <Badge>{task.status}</Badge>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="files">
            <ul>
              {project.files.map((file) => (
                <li key={file.id} className="flex items-center py-2">
                  <span className="mr-2">{file.name}</span>
                  <Badge variant="secondary">{file.type}</Badge>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="team">
            <div className="flex flex-wrap gap-2">
              {project.members.map((member, index) => (
                <Avatar key={index}>
                  <AvatarFallback>{member.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
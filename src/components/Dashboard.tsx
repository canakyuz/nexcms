import React from 'react'
import { DashboardMetrics } from './DashboardMetrics'
import { AnalyticsSummary } from './AnalyticsSummary'
import { ProjectCard } from './ProjectCard'
import { RecentActivities } from './RecentActivities'
import { TeamPerformance } from './TeamPerformance'
import { UpcomingDeadlines } from './UpcomingDeadlines'
import { ResourceAllocation } from './ResourceAllocation'
import { BudgetOverview } from './BudgetOverview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    name: "E-commerce Platform",
    status: "In Progress",
    description: "Building a new e-commerce platform with advanced features",
    progress: 60,
    team: ["J", "A", "B"]
  },
  {
    name: "Mobile App Redesign",
    status: "Planning",
    description: "Redesigning the mobile app for better user experience",
    progress: 20,
    team: ["E", "D"]
  },
  {
    name: "Data Analytics Dashboard",
    status: "Completed",
    description: "Creating a comprehensive data analytics dashboard",
    progress: 100,
    team: ["S", "M", "L"]
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <DashboardMetrics />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnalyticsSummary />
            <ResourceAllocation />
            <BudgetOverview />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <RecentActivities />
            <UpcomingDeadlines />
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <TeamPerformance />
        </TabsContent>
      </Tabs>
    </div>
  )
}
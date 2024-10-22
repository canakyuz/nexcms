import React from 'react'
import { ProjectCard } from './ProjectCard'

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

export function ProjectList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: 'E-commerce Platform', value: 400 },
  { name: 'Mobile App Redesign', value: 300 },
  { name: 'Data Analytics Dashboard', value: 300 },
]

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']

export function ResourceAllocation() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Resource Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            'E-commerce Platform': {
              label: "E-commerce Platform",
              color: COLORS[0],
            },
            'Mobile App Redesign': {
              label: "Mobile App Redesign",
              color: COLORS[1],
            },
            'Data Analytics Dashboard': {
              label: "Data Analytics Dashboard",
              color: COLORS[2],
            },
          }}
          className="aspect-[4/3] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius="80%"
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
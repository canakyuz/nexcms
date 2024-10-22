import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: 'Jan', budget: 4000, actual: 2400 },
  { name: 'Feb', budget: 3000, actual: 1398 },
  { name: 'Mar', budget: 2000, actual: 9800 },
  { name: 'Apr', budget: 2780, actual: 3908 },
  { name: 'May', budget: 1890, actual: 4800 },
  { name: 'Jun', budget: 2390, actual: 3800 },
]

export function BudgetOverview() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            budget: {
              label: "Budget",
              color: "hsl(var(--chart-1))",
            },
            actual: {
              label: "Actual",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="aspect-[16/9] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={'preserveStartEnd'}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="budget" fill="var(--color-budget)" />
              <Bar dataKey="actual" fill="var(--color-actual)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
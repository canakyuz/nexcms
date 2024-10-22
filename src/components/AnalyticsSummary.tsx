import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const analyticsData = [
  { name: 'Ocak', ziyaretci: 2400, sayfa_goruntulenme: 4000, yeni_kullanici: 2400 },
  { name: 'Şubat', ziyaretci: 1398, sayfa_goruntulenme: 3000, yeni_kullanici: 2210 },
  { name: 'Mart', ziyaretci: 9800, sayfa_goruntulenme: 2000, yeni_kullanici: 2290 },
  { name: 'Nisan', ziyaretci: 3908, sayfa_goruntulenme: 2780, yeni_kullanici: 2000 },
  { name: 'Mayıs', ziyaretci: 4800, sayfa_goruntulenme: 1890, yeni_kullanici: 2181 },
  { name: 'Haziran', ziyaretci: 3800, sayfa_goruntulenme: 2390, yeni_kullanici: 2500 },
  { name: 'Temmuz', ziyaretci: 4300, sayfa_goruntulenme: 3490, yeni_kullanici: 2100 },
]

export function AnalyticsSummary() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Analitik Özeti</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            ziyaretci: {
              label: "Ziyaretçi",
              color: "hsl(var(--chart-1))",
            },
            sayfa_goruntulenme: {
              label: "Sayfa Görüntülenme",
              color: "hsl(var(--chart-2))",
            },
            yeni_kullanici: {
              label: "Yeni Kullanıcı",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="aspect-[16/9] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={'preserveStartEnd'}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="ziyaretci" stroke="var(--color-ziyaretci)" />
              <Line type="monotone" dataKey="sayfa_goruntulenme" stroke="var(--color-sayfa_goruntulenme)" />
              <Line type="monotone" dataKey="yeni_kullanici" stroke="var(--color-yeni_kullanici)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
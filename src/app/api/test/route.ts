import { NextResponse } from 'next/server'

export async function GET() {
  console.log("API route called")
  return NextResponse.json({ message: "Hello from API" })
}
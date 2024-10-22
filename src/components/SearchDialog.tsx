'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Search } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { useRouter } from 'next/navigation'

// This is a mock function. Replace with actual search logic.
const searchProject = async (query: string) => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 100))
  return [
    { id: '1', title: 'Dashboard', type: 'Page', url: '/dashboard' },
    { id: '2', title: 'Users', type: 'Page', url: '/users' },
    { id: '3', title: 'Settings', type: 'Page', url: '/settings' },
    { id: '4', title: 'E-commerce Project', type: 'Project', url: '/projects/e-commerce' },
    { id: '5', title: 'Blog Post', type: 'Content', url: '/content/blog-post' },
  ].filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  )
}

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Array<{ id: string, title: string, type: string, url: string }>>([])
  const router = useRouter()

  const toggleDialog = useCallback(() => {
    setOpen(prev => !prev)
    setQuery('')
    setResults([])
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleDialog()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [toggleDialog])

  useEffect(() => {
    const searchItems = async () => {
      if (query.length > 0) {
        const searchResults = await searchProject(query)
        setResults(searchResults)
      } else {
        setResults([])
      }
    }

    searchItems()
  }, [query])

  const handleSelect = (item: { url: string }) => {
    router.push(item.url)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] bg-background backdrop-blur-sm border border-border/50">
        <Command className="rounded-lg border-none bg-transparent">
          <div className="flex w-full border-b" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 mt-3 ml-2" />
            <CommandInput
              placeholder="Tüm projede ara..."
              className="flex h-11 max-w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={query}
              onValueChange={setQuery}
            />
          </div>
          <CommandList>
            <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
            <CommandGroup heading="Sonuçlar">
              {results.map((result) => (
                <CommandItem key={result.id} onSelect={() => handleSelect(result)}>
                  <span>{result.title}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{result.type}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
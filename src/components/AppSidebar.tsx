'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from "next-themes"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Command as CommandIcon, MoreHorizontal, Search, LayoutDashboard, Users, BarChart, FileText, Sun, Moon, Settings, ChevronRight, History, Star, Cog, Bot, Book, Briefcase, Plane } from 'lucide-react'
import { mockProjects, mockNavigation, Project, NavigationItem } from '@/lib/mock-data'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface AppSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  isMobile: boolean;
}

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

export default function AppSidebar({ isCollapsed, setIsCollapsed, isMobile }: AppSidebarProps) {
  const { theme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ id: string, title: string, type: string, url: string }>>([])
  const router = useRouter()

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Users': return Users;
      case 'BarChart': return BarChart;
      case 'FileText': return FileText;
      case 'Bot': return Bot;
      case 'Book': return Book;
      case 'Cog': return Cog;
      case 'Briefcase': return Briefcase;
      case 'Plane': return Plane;
      default: return LayoutDashboard;
    }
  }

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev)
    setSearchQuery('')
    setSearchResults([])
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleSearch()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [toggleSearch])

  useEffect(() => {
    const searchItems = async () => {
      if (searchQuery.length > 0) {
        const results = await searchProject(searchQuery)
        setSearchResults(results)
      } else {
        setSearchResults([])
      }
    }

    searchItems()
  }, [searchQuery])

  const handleSelect = (item: { url: string }) => {
    router.push(item.url)
    setIsSearchOpen(false)
  }

  if (isMobile && isCollapsed) {
    return null
  }

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r transition-all duration-300 ease-in-out fixed top-0 left-0 z-50",
        isMobile ? (isCollapsed ? "w-0 -translate-x-full" : "w-64") : (isCollapsed ? "w-16" : "w-64")
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CommandIcon className="size-4" />
          </div>
          {(!isCollapsed || isMobile) && <span className="font-semibold text-lg">NexCMS</span>}
        </Link>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(true)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      {(!isCollapsed || iMobile) && (
        <div className="px-4 mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ara... (Ctrl + K)"
              className="pl-8"
              onClick={toggleSearch}
            />
          </div>
        </div>
      )}
      {isSearchOpen && (
        <div className="px-4 mb-4">
          <Command className="rounded-lg border shadow-md">
            <CommandInput
              placeholder="Tüm projede ara..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
              <CommandGroup heading="Sonuçlar">
                {searchResults.map((result) => (
                  <CommandItem key={result.id} onSelect={() => handleSelect(result)}>
                    <span>{result.title}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{result.type}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          {(!isCollapsed || iMobile) && (
            <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Platform
            </h2>
          )}
          <div className="space-y-1">
            {mockNavigation.map((item: NavigationItem) => (
              <Collapsible key={item.name}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      isCollapsed && !iMobile && "justify-center",
                      item.isActive && "bg-accent text-accent-foreground"
                    )}
                  >
                    {React.createElement(getIcon(item.icon), { className: "h-4 w-4 mr-2" })}
                    {(!isCollapsed || iMobile) && (
                      <>
                        <span className="flex-1 text-left">{item.name}</span>
                        {item.subItems && <ChevronRight className="h-4 w-4" />}
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                {(!isCollapsed || iMobile) && item.subItems && (
                  <CollapsibleContent className="pl-6 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Button
                        key={subItem.name}
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href={subItem.href}>
                          <span>{subItem.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ))}
          </div>
        </div>
        {(!isCollapsed || iMobile) && (
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Projeler
            </h2>
            <div className="space-y-1">
              {mockProjects.map((project: Project) => (
                <div key={project.id} className="flex items-center">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={`/projects/${project.id}`}>
                      {React.createElement(getIcon(project.icon), { className: "h-4 w-4 mr-2" })}
                      <span>{project.name}</span>
                    </Link>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Daha Fazla</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>Projeyi Görüntüle</DropdownMenuItem>
                      <DropdownMenuItem>Projeyi Düzenle</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">Projeyi Sil</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-4 w-full">
       <div className={cn(
          "flex justify-between space-x-2",
          isCollapsed && !iMobile && "flex-col space-x-0 space-y-2"
        )}>
          <Button
            variant="outline"
            size="icon"
            onClick={handleThemeChange}
            title={theme === 'dark' ? 'Açık Tema' : 'Koyu Tema'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {/* Ayarlar işlevi */}}
            title="Ayarlar"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
'use client'

import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import AppSidebar from './AppSidebar'
import { SearchDialog } from './SearchDialog'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsCollapsed(false)
      }
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        setIsSearchOpen={setIsSearchOpen}
        isMobile={isMobile}
        openSearch={() => setIsSearchOpen(true)}
      />
      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${
        isMobile ? (isCollapsed ? 'ml-0' : 'ml-0 md:ml-64') : (isCollapsed ? 'ml-16' : 'ml-64')
      }`}>
        <Navbar
          toggleSidebar={toggleSidebar}
          isCollapsed={isCollapsed}
          isMobile={isMobile}
        />
        <main className={`flex-1 overflow-y-auto p-4 ${isMobile && !isCollapsed ? 'hidden md:block' : ''}`}>
          {children}
        </main>
      </div>
      {isMobile && !isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </div>
  )
}
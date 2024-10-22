import React from 'react'
import { Bell, MessageSquare, PanelLeftClose, PanelLeftOpen, User, Settings, LogOut, MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"

interface NavbarProps {
  toggleSidebar: () => void
  isCollapsed: boolean
  isMobile: boolean
}

export default function Navbar({ toggleSidebar, isCollapsed, isMobile }: NavbarProps) {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-muted-foreground hover:text-foreground">
              {isMobile || isCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
            </Button>
            <ResponsiveBreadcrumb />
          </div>
          <div className="flex items-center space-x-4">
            <NotificationsDropdown />
            <MessagesDropdown />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}

function ResponsiveBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:inline-flex" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="/projects">Projeler</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:inline-flex" />
        <BreadcrumbItem className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-auto p-0">
                <MoreHorizontal className="h-4 w-4 mr-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <BreadcrumbLink href="/projects">Projeler</BreadcrumbLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage>Mevcut  Sayfa</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
            3
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-start space-x-2 py-2">
          <Avatar className="mt-1">
            <AvatarImage src="/avatars/02.png" alt="@user1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Yeni proje daveti</span>
            <span className="text-sm text-muted-foreground">John Doe sizi "E-ticaret Platformu" projesine davet etti.</span>
            <span className="text-xs text-muted-foreground mt-1">2 dakika önce</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-start space-x-2 py-2">
          <Avatar className="mt-1">
            <AvatarImage src="/avatars/03.png" alt="@user2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Yorum yapıldı</span>
            <span className="text-sm text-muted-foreground">Jane Smith "Mobil Uygulama Yeniden Tasarımı" projesinde bir yorum yaptı.</span>
            <span className="text-xs text-muted-foreground mt-1">1 saat önce</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MessagesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <MessageSquare className="h-5 w-5" />
          <Badge variant="secondary" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
            2
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Mesajlar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-start space-x-2 py-2">
          <Avatar className="mt-1">
            <AvatarImage src="/avatars/04.png" alt="@user3" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Sarah Johnson</span>
            <span className="text-sm text-muted-foreground">Merhaba, proje hakkında konuşabilir miyiz?</span>
            <span className="text-xs text-muted-foreground mt-1">10 dakika önce</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-start space-x-2 py-2">
          <Avatar className="mt-1">
            <AvatarImage src="/avatars/05.png" alt="@user4" />
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Mike Brown</span>
            <span className="text-sm text-muted-foreground">Toplantı notlarını gönderebilir misin?</span>
            <span className="text-xs text-muted-foreground mt-1">2 saat önce</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profil</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Ayarlar</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Çıkış Yap</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
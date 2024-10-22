import { SidebarFooter as ShadcnSidebarFooter } from "@/components/ui/sidebar"
import { ThemeToggle } from "./theme-toggle"
import { SettingsButton } from "./settings-button"
import { SupportButton } from "./support-button"

interface SidebarToolsProps {
  isCollapsed: boolean;
}

export function SidebarTools({ isCollapsed }: SidebarToolsProps) {
  return (
    <ShadcnSidebarFooter className="">
      <div className={`flex ${isCollapsed ? 'flex-col' : 'flex-row'} justify-between items-center`}>
        <ThemeToggle/>
        <SettingsButton/>
        <SupportButton/>
      </div>
    </ShadcnSidebarFooter>
  )
}
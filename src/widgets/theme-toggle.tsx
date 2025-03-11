"use client"

import { Toggle } from "@/components/ui/toggle"
import clsx from "clsx"
import { useTheme } from "nextra-theme-docs"
import { useCallback } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  const changeTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }, [setTheme, theme])

  const icon =
    theme === "light" ? (
      <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
    )

  return (
    <Toggle
      size="sm"
      className={clsx(["cursor-pointer", className])}
      onClick={changeTheme}
    >
      {icon}
    </Toggle>
  )
}

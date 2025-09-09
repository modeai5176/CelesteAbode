import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface KickerProps {
  children: ReactNode
  className?: string
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <div className={cn(
      "inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold uppercase tracking-wider mb-4",
      className
    )}>
      {children}
    </div>
  )
}






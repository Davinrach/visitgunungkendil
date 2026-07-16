import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-5xl font-heading font-bold text-textPrimary tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function SectionSubtitle({ className, children, ...props }: SectionSubtitleProps) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-textSecondary font-body max-w-2xl mt-4",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

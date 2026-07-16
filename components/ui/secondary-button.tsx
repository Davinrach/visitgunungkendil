"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface SecondaryButtonProps extends HTMLMotionProps<"button"> {}

export const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent text-primary font-body font-medium px-8 py-3 transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
SecondaryButton.displayName = "SecondaryButton"

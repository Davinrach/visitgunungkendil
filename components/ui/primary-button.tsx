"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface PrimaryButtonProps extends HTMLMotionProps<"button"> {}

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-body font-medium px-8 py-3 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-soft",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
PrimaryButton.displayName = "PrimaryButton"

import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.08] via-accent-primary/[0.04] to-transparent bg-[length:200%_200%] bg-top text-body-text backdrop-blur-xl shadow-[0_8px_32px_0_rgba(10,10,15,0.4)] transition-all duration-500 hover:bg-bottom",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }

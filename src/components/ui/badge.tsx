import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-transparent font-jetbrains-mono transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default: "bg-bg-accent-tint/60 backdrop-blur-md border border-accent-primary/20 text-accent-hover px-[12px] py-[6px] text-[12px] shadow-[0_4px_16px_0_rgba(124,58,237,0.15)]",
        success: "bg-success/15 border border-success/20 text-success px-[16px] py-[6px] text-[13px] font-inter font-medium tracking-wide shadow-[0_4px_16px_0_rgba(16,185,129,0.15)]",
        achievement: "bg-achievement/20 text-achievement border border-achievement/20 px-[12px] py-[4px] text-[11px] shadow-[0_4px_16px_0_rgba(245,158,11,0.15)]",
        tech: "bg-[#0A0A0F]/60 backdrop-blur-md border border-bg-elevated text-link text-[11px] px-[10px] py-[4px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

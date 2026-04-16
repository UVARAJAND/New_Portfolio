import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[16px] btn-ripple active:scale-95 ease-[cubic-bezier(0.22,1,0.36,1)]",
  {
    variants: {
      variant: {
        default: "bg-accent-primary text-white hover:bg-accent-hover hover:scale-[1.03] shadow-[0_0_24px_-4px_rgba(124,58,237,0.6)]",
        ghost: "border border-muted/20 bg-white/5 backdrop-blur-lg text-body hover:border-accent-hover/40 hover:bg-white/10 hover:text-heading hover:scale-[1.03] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]",
        icon: "rounded-full bg-white/5 backdrop-blur-md text-muted border border-muted/20 hover:border-accent-primary/40 hover:text-accent-hover h-10 w-10 p-0 shadow-lg",
      },
      size: {
        default: "px-[32px] py-[14px]",
        sm: "px-[20px] py-[8px] text-[14px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Folder } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const folderCardVariants = cva(
  "group relative flex flex-col justify-between w-full aspect-[1.25] md:aspect-[320/208] bg-[#1a1a1a] border border-[#0d2d1d] rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl hover:bg-[#222222] cursor-pointer shadow-lg hover:shadow-xl",
  {
    variants: {
      color: {
        default: "hover:border-blue-500/40",
        blue: "hover:border-blue-500/50",
        purple: "hover:border-purple-500/50",
        pink: "hover:border-pink-500/50",
        green: "hover:border-green-500/50",
        orange: "hover:border-orange-500/50",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
)

export interface FolderCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof folderCardVariants> {
  title: string
  subtitle?: string
  icon?: React.ReactNode
}

export const FolderCard = React.forwardRef<HTMLDivElement, FolderCardProps>(
  ({ className, color, title, subtitle, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(folderCardVariants({ color, className }))}
        {...props}
      >
        <div className="absolute top-6 left-6 w-12 h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#333]">
          {icon || <Folder className="h-6 w-6 text-white opacity-80" />}
        </div>
        
        <div className="mt-auto pt-16">
          <h3 className="text-white font-bold text-lg tracking-wide uppercase line-clamp-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    )
  }
)
FolderCard.displayName = "FolderCard"

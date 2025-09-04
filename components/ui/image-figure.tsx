import Image from "next/image"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ImageFigureProps {
  src: string
  alt: string
  caption?: ReactNode
  className?: string
  imageClassName?: string
  captionClassName?: string
  width?: number
  height?: number
}

export function ImageFigure({ 
  src, 
  alt, 
  caption, 
  className, 
  imageClassName, 
  captionClassName,
  width = 600,
  height = 400
}: ImageFigureProps) {
  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105",
            imageClassName
          )}
        />
      </div>
      {caption && (
        <figcaption className={cn(
          "mt-3 text-sm text-muted-foreground text-center",
          captionClassName
        )}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}



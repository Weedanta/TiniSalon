import * as React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-secondary-500 hover:bg-secondary-500/90 text-grey-500 shadow-md hover:shadow-lg border border-transparent rounded-full transition-all w-3xs md:w-md sm:w-md",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonBaseProps = {
  asChild?: boolean
} & VariantProps<typeof buttonVariants>

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<React.ComponentProps<"button">, "asChild"> & {
    href?: never
  }

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "asChild"> & {
    href: string
  }

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const baseClassName = cn(buttonVariants({ variant, size, className }))

  if (asChild) {
    return (
      <Slot
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={baseClassName}
        {...props}
      />
    )
  }

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props
    return (
      <Link
        href={href}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={baseClassName}
        {...linkProps}
      />
    )
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={baseClassName}
      {...(props as React.ComponentProps<"button">)}
    />
  )
}

export { Button, buttonVariants }
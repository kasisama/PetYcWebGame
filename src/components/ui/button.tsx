import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-[color,background-color,transform,box-shadow] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-moss text-moss-fg hover:bg-moss-deep",
        outline: "border border-line bg-surface text-ink hover:bg-paper-deep",
        ghost: "text-ink-soft hover:bg-paper-deep hover:text-ink",
        danger: "bg-rose text-rose-fg hover:opacity-90",
        sky: "bg-sky text-moss-fg hover:opacity-90",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return <button type="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

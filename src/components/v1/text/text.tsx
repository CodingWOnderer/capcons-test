import clsx from 'clsx'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      data-slot="text"
      {...props}
      className={cn(' text-muted-foreground text-sm/6',className)}
    />
  )
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'text-foreground underline decoration-foreground/50 data-hover:decoration-foreground'
      )}
    />
  )
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
  return <strong {...props} className={clsx(className, 'font-medium text-foreground')} />
}

export function Code({ className, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        'rounded-sm border border-border/10 bg-muted/25 px-0.5 font-medium text-foreground text-[0.8125rem]'
      )}
    />
  )
}
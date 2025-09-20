import clsx from 'clsx'
import { Link } from '../link/link'
import { cn } from '@/lib/utils'

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      data-slot="text"
      {...props}
      className={cn( 'text-xs/6 text-mineshaft-500  dark:text-mineshaft-400',className)}
    />
  )
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'text-mineshaft-950 underline decoration-mineshaft-950/50 data-hover:decoration-mineshaft-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white'
      )}
    />
  )
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
  return <strong {...props} className={clsx(className, 'font-medium text-mineshaft-950 dark:text-white')} />
}

export function Code({ className, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        'rounded-sm border border-mineshaft-950/10 bg-mineshaft-950/2.5 px-0.5 text-xs font-medium text-mineshaft-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white'
      )}
    />
  )
}

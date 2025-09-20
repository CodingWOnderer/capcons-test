import clsx from 'clsx'

export function DescriptionList({ className, ...props }: React.ComponentPropsWithoutRef<'dl'>) {
  return (
    <dl
      {...props}
      className={clsx(
        className,
        'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6'
      )}
    />
  )
}

export function DescriptionTerm({ className, ...props }: React.ComponentPropsWithoutRef<'dt'>) {
  return (
    <dt
      {...props}
      className={clsx(
        className,
        'col-start-1 border-t border-mineshaft-950/5 pt-3 text-mineshaft-500 first:border-none sm:border-t sm:border-mineshaft-950/5 sm:py-3 dark:border-white/5 dark:text-mineshaft-400 sm:dark:border-white/5'
      )}
    />
  )
}

export function DescriptionDetails({ className, ...props }: React.ComponentPropsWithoutRef<'dd'>) {
  return (
    <dd
      {...props}
      className={clsx(
        className,
        'pt-1 pb-3 text-mineshaft-950 sm:border-t sm:border-mineshaft-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5'
      )}
    />
  )
}

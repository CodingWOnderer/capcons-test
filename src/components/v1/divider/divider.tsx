import clsx from 'clsx'

export function Divider({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      role="separator"
      {...props}
      className={clsx(
        className,
        'w-full border-t',
        soft && 'border-mineshaft-950/5 dark:border-white/5',
        !soft && 'border-mineshaft-950/10 dark:border-white/10'
      )}
    />
  )
}

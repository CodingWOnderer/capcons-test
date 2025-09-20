import type React from 'react'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-dvh flex-col p-2">
      <div className="flex grow items-center justify-center p-6 lg:rounded-lg l dark:bg-gradient-to-tr dark:from-mineshaft-700 dark:via-mineshaft-800 dark:to-bunker-700 lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-mineshaft-900/5 px-4  dark:lg:ring-white/10">
        {children}
      </div>
    </main>
  )
}

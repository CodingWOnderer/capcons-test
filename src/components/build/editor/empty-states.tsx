import type React from "react"
import { FileText, Plus, Layers } from "lucide-react"
import { Button } from "@/components/v1/button/button"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="mb-4 p-3 rounded-full bg-muted/50">{icon}</div>
      <h3 className="text-sm/6 font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-xs/6 text-muted-foreground max-w-sm mb-6 leading-relaxed">{description}</p>
      {action && (
        <Button onClick={action.onClick} variant="outline" className="gap-2 bg-transparent">
          <Plus className="h-4 w-4" />
          {action.label}
        </Button>
      )}
    </div>
  )
}

export function NoPageSelected({ onCreatePage }: { onCreatePage?: () => void }) {
  return (
    <EmptyState
      icon={<FileText strokeWidth={1} className="h-6 w-6 text-muted-foreground" />}
      title="No Page Selected"
      description="Select a page from the sidebar to start editing, or create a new page to begin building your website."
      action={
        onCreatePage
          ? {
              label: "Create New Page",
              onClick: onCreatePage,
            }
          : undefined
      }
    />
  )
}

export function EmptyPageState({ onAddContent }: { onAddContent?: () => void }) {
  return (
    <EmptyState
      icon={<Layers strokeWidth={1} className="h-6 w-6 text-muted-foreground" />}
      title="Empty Page"
      description="This page is empty. Start building by adding components and content to create your design."
      action={
        onAddContent
          ? {
              label: "Add Content",
              onClick: onAddContent,
            }
          : undefined
      }
    />
  )
}

import type React from "react"
import type { ReactNode } from "react"
import { toast, Toaster } from "sonner"
import { CheckCircle, Info, AlertTriangle, XCircle, X } from "lucide-react"
import { HiOutlineSparkles } from "react-icons/hi2";


type NotificationType = "success" | "info" | "warning" | "error"

export type TNotification = {
  type: NotificationType
  title?: string
  text?: ReactNode
  actions?: { label: string; onClick: () => void }[]
}

const typeConfig: Record<
  NotificationType,
  {
    icon: React.ElementType
    color: string 
    defaultTitle: string
    defaultText: string
  }
> = {
  success: {
    icon: CheckCircle,
    color: "text-green-600 dark:text-green-400",
    defaultTitle: "Action completed",
    defaultText:
      "Your request was successfully processed. Everything looks good and no further action is required.",
  },
  info: {
    icon: Info,
    color: "text-blue-600 dark:text-blue-400",
    defaultTitle: "Heads up",
    defaultText:
      "Here’s something useful to know. This message contains helpful information for your next steps.",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-yellow-600 dark:text-yellow-400",
    defaultTitle: "Check this",
    defaultText:
      "Something may need your attention. Please review the details and confirm before continuing.",
  },
  error: {
    icon: XCircle,
    color: "text-red-600 dark:text-red-400",
    defaultTitle: "Something went wrong",
    defaultText:
      "We couldn’t complete your request. Try again or contact support if the issue keeps happening.",
  },
}

const NotificationContent = (
  t: string | number,
  { type, title, text, actions }: TNotification
) => {
  const { icon: Icon, color, defaultTitle, defaultText } = typeConfig[type]

  return (
    <div className="bg-white dark:bg-mineshaft-900 border border-mineshaft-200 dark:border-mineshaft-600/80 rounded-xl p-3 shadow-lg sm:min-w-[400px] relative">
      <button
      type="button"
        onClick={() => toast.dismiss(t)}
        className="absolute top-3 cursor-pointer right-3 text-mineshaft-500 dark:text-mineshaft-400 hover:text-mineshaft-800 dark:hover:text-mineshaft-200 transition-colors"
      >
        <X size={14} />
      </button>

      <div className="flex items-start gap-3">
        <Icon className={`${color} mt-0.5`} size={14} />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-mineshaft-900 dark:text-white text-sm font-normal flex items-center gap-1">
              <HiOutlineSparkles /> {title || defaultTitle}
            </span>
          </div>

          <p className="text-mineshaft-600 capitalize dark:text-mineshaft-300 text-xs/5 mb-3 line-clamp-3">
            {text || defaultText}
          </p>

          {actions && actions.length > 0 && (
            <div className="flex gap-2">
              {actions.map((action, i) => (
                <button
                  key={`action-${i.toString()}`}
                  type="button"
                  onClick={action.onClick}
                  className="bg-transparent border border-mineshaft-300 dark:border-mineshaft-600 text-mineshaft-700 dark:text-mineshaft-300 text-xs rounded-md px-2 py-1 hover:bg-mineshaft-100 dark:hover:bg-mineshaft-800 hover:text-mineshaft-900 dark:hover:text-mineshaft-200 transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const createNotification = (props: TNotification) => {
  return toast.custom((t) => NotificationContent(t, props), {
    duration: 3000,
    position: "top-right",
  })
}

const NotificationContainer = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      classNames: {
        toast: "border-0 bg-transparent p-0",
      },
    }}
    richColors={false}
  />
)

export { createNotification, NotificationContainer }

import type { ErrorComponentProps } from '@tanstack/react-router'

export const CircleErrorHandling = ({ error }: ErrorComponentProps) => {
  const renderComponent = () => {
    switch (error.message) {
      case "INVALID_CIRCLE":
        return (
          <div className="p-4 rounded-xl bg-red-100 text-red-700">
            <h2 className="font-bold text-lg">Invalid Circle</h2>
            <p>The circle you are trying to access does not exist or is invalid.</p>
          </div>
        )

      case "EMPTY_CIRCLE":
        return (
          <div className="p-4 rounded-xl bg-yellow-100 text-yellow-700">
            <h2 className="font-bold text-lg">Empty Circle</h2>
            <p>This circle currently has no data. Please add content or check back later.</p>
          </div>
        )

      default:
        throw error
    }
  }

  return <div>{renderComponent()}</div>
}

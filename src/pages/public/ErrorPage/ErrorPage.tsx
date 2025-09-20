import { Button } from "@/components/v1/button/button"
import { Link, type ErrorComponentProps } from "@tanstack/react-router"
import { AxiosError } from "axios"
import { LiaBugSolid } from "react-icons/lia";

export const ErrorPage = ({error}:ErrorComponentProps)=>{
    return <div className="flex h-screen w-screen items-center justify-center bg-mineshaft-900">
      <div className="flex max-w-3xl flex-col rounded-md border border-mineshaft-600 bg-mineshaft-800 p-8 text-center text-mineshaft-200">
        <LiaBugSolid className="my-2 inline text-6xl"/>
        <p className="text-sm/6">
          Something went wrong. Please contact{" "}
          <a
            className="inline cursor-pointer text-mineshaft-100 underline decoration-primary-500 underline-offset-4 opacity-80 duration-200 hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:support@capcons.com"
          >
            support@capcons.com
          </a>
          , or{" "}
          <a
            href="https://capcons.com/slack"
            className="inline cursor-pointer text-mineshaft-100 underline decoration-primary-500 underline-offset-4 opacity-80 duration-200 hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            join our Slack community
          </a>{" "}
          if the issue persists.
        </p>
        <Link to="/login">
          <Button className="mt-4" size="xs">
            Log In Again
          </Button>
        </Link>
        {error?.message && (
          <>
            <div className="my-4 h-px w-full bg-mineshaft-600" />
            <p className="thin-scrollbar max-h-44 w-full overflow-auto text-ellipsis rounded-md bg-mineshaft-700 p-2">
              <code className="text-xs">
                {window.location.pathname}
                <br />
                {error.name}
                <br />
                {error.message}
              </code>
              <code className="font-mono text-xs">
                {error instanceof AxiosError && (
                  <div className="mt-4">{JSON.stringify(error.response?.data)}</div>
                )}
              </code>
            </p>
          </>
        )}
      </div>
    </div>
}
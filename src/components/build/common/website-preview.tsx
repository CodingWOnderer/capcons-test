import React, { Suspense } from "react";
import WebsiteRendererSkeleton from "@/pages/circle/components/renderer-skeleton";
import { useEditorStore, usePreviewDialogOpen } from "../store/editor.store";
import { Dialog } from "@/components/v1/dialog/dialog";
import { MdLockOutline } from "react-icons/md";
import { Maximize } from "lucide-react";

const WebsitePreviewRenderer = React.lazy(
  () => import("@/components/build/editor/renderer"),
);

export default function WebsitePreviewDialog() {
  const open = usePreviewDialogOpen();
  const setPreviewDialogOpen = useEditorStore((s) => s.setPreviewDialogOpen);
  const currentPage = useEditorStore((s)=>s.currentPage);

  return (
    <Dialog
      open={open}
      onClose={() => setPreviewDialogOpen(false)}
      className="sm:max-w-none z-50 p-0 sm:p-0 h-screen w-screen border-none outline-0 ring-0"
    >
      <div className="mx-auto transition-all ease-linear h-screen flex flex-col bg-muted">
        <div className="flex-shrink-0 px-4 py-2 flex items-center gap-4 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full border border-red-600"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-500"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full border border-green-600"></div>
          </div>

          <div className="flex-1 mx-auto max-w-4xl flex items-center">
            <div className="flex-1 bg-muted rounded-lg px-4 py-1.5 flex items-center gap-3 border border-border">
              <div className="w-4 h-4 text-muted-foreground">
                <MdLockOutline />
              </div>
              <span className="text-foreground/80 text-xs font-medium">
       
                {new URL(`https://demo.capcons.com${currentPage?.path ?? ""}`).toString()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setPreviewDialogOpen(false)}
              type="button"
              className="p-1.5 hover:bg-muted rounded-md"
            >
              <Maximize className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Scrollable Preview Area */}
        <div className="flex-1 overflow-y-auto bg-background">
          <Suspense fallback={<WebsiteRendererSkeleton />}>
            <WebsitePreviewRenderer />
          </Suspense>
        </div>
      </div>
    </Dialog>
  );
}

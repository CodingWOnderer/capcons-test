import { ResizablePanel } from "@/components/v1/resizeable/resizeable";
import { ScrollArea } from "@/components/v1/scroll-area/srcollarea";
import { useEditorEngine } from "../../hooks/useEditorEngine";
import { Puck } from "@measured/puck";
import { useId } from "react";
import { cn } from "@/lib/utils";

export default function RightPanel() {
  const rightSidebarVisible = useEditorEngine((s) => s.appState);
  const id = useId();

  return (
    <ResizablePanel
      id={id}
      style={{
        height: "100vh",
      }}
      order={3}
      className={cn(
        "flex h-full w-fit bg-background/95 group/panel p-0  border-r-[0.5px] border-border",
        rightSidebarVisible.ui.rightSideBarVisible ? "" : "hidden"
      )}
      maxSize={30}
      minSize={10}
    >
      <ScrollArea className="h-[calc(100vh-55px)] w-full">
        <Puck.Fields />
      </ScrollArea>
    </ResizablePanel>
  );
}

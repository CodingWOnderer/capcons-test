import { useEditorEngine } from "../../hooks/useEditorEngine";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/v1/tabs/tabs";
import { Drawer, Puck } from "@measured/puck";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/v1/resizeable/resizeable";
import { ScrollArea } from "@/components/v1/scroll-area/srcollarea";
import { cn } from "@/lib/utils";
import { useId } from "react";

export default function LeftPanel() {
  const dispatch = useEditorEngine((s) => s.dispatch);
  const id = useId()
  return (
    <ResizablePanel
      id={id}
      order={1}
      className={cn("flex h-full w-fit z-10 group/panel min-w-[250px] ")}
      maxSize={30}
      minSize={12}
      onClick={()=>dispatch({ type: "setUi", ui: { itemSelector: null } })}
    >
      <div className="flex-1 w-full p-3 flex flex-col">
        <Drawer>
          <Tabs
            defaultValue="page"
            className="text-sm h-[calc(100vh-70px)] w-full text-muted-foreground flex flex-col"
          >
            <TabsList className="grid w-full grid-cols-2 text-xs">
              <TabsTrigger className="cursor-pointer text-xs" value="page">
                Components
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer text-xs" value="settings">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="page" className="h-full flex-1">
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={60} minSize={30}>
                  <div className="h-full flex flex-col overflow-hidden">
                    <ScrollArea className="h-full">
                      <Puck.Components />
                    </ScrollArea>
                  </div>
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel defaultSize={40} minSize={20}>
                  <div className="h-full flex flex-col overflow-hidden">
                    <ScrollArea className="h-full">
                      <Puck.Outline />
                      {/* <OutlineComponent/> */}
                    </ScrollArea>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </TabsContent>

            <TabsContent value="settings" className="flex-1">
              Content for Security
            </TabsContent>
          </Tabs>
        </Drawer>
      </div>
    </ResizablePanel>
  );
}

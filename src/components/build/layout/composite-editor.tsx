import {
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/v1/resizeable/resizeable";
import LeftPanel from "./leftpanel/leftpanel";
import RightPanel from "./rightpanel/right-panel";
import EditorPreview from "./preview/builder-preview";
import EditorHeader from "./header/editor-header";

export default function CompositeEditor() {
  return (
    <div className="h-screen w-screen overflow-clip  flex flex-col select-none relative">
      <EditorHeader />
      <div>
        <ResizablePanelGroup
          autoSaveId={"conditional"}
          className=" "
          direction="horizontal"
        >
          <LeftPanel />
          <ResizableHandle />
          <EditorPreview />
          <ResizableHandle />
          <RightPanel />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

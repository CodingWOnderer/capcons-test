import { ResizablePanel } from "@/components/v1/resizeable/resizeable";
import { Puck } from "@measured/puck";
import { useViewport } from "../../store/editor.store";
import { useId } from "react";
import WebsitePreview from "./_components/safari-mockup";

export default function EditorPreview() {
  const viewport = useViewport();
  const id = useId();

  return (
    <ResizablePanel
      id={id}
      order={2}
      className="bg-secondary h-[calc(100vh-50px)] p-4"
    >
      <WebsitePreview viewport={viewport} url="demo.capcons.com"  >
        <Puck.Preview />
      </WebsitePreview>
    </ResizablePanel>
  );
}


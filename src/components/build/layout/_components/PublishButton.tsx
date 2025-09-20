import { useEditorStore } from "../../store/editor.store";
import { Button } from "@/components/v1/button/button";

export default function PublishButton() {
  const publishPage = useEditorStore((s) => s.publishTemplate);

  return (
    <Button
      size={"sm"}
      onClick={() => publishPage()}
      className="rounded-md cursor-pointer text-xs/5 font-medium h-7 p-2"
    >
      {/* {isPublishing ? "Publishing..." : "Publish"} */}
      Publish
    </Button>
  );
}

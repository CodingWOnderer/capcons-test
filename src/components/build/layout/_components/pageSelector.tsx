import {
  useCurrentPageId,
  useCurrentTemplate,
  useEditorStore,
} from "../../store/editor.store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/v1/select/select";

export default function PageSelector() {
  const currentPageId = useCurrentPageId();
  const switchPage = useEditorStore((state) => state.switchPage);
  const templates = useCurrentTemplate();

  const pages = templates?.pages ?? [];

  return (
    <Select value={currentPageId} onValueChange={switchPage}>
      <SelectTrigger
        show
		
        className=" mx-auto shadow-none pl-0 text-xs text-foreground cursor-pointer border-none outline-none focus-visible:ring-0"
      >
        <SelectValue placeholder="Select a page" />
      </SelectTrigger>
      <SelectContent align="center" className=" border-border w-fit rounded-md">
        {pages.map((page) => (
          <SelectItem className="text-xs p-1 text-ellipsis" key={page.pageId} value={page.pageId}>
            {page.pagename}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

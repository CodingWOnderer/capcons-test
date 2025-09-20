import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/v1/select/select";
import { useEditorStore, useViewport } from "../../store/editor.store";
import { EDITOR_VIEWPORTS } from "../../utils/viewports";

export default function ViewPortSelector() {
  const currentViewport = useViewport();
  const setCurrentViewPort = useEditorStore((state) => state.setViewport);

  return (
    <Select
      value={String(currentViewport.width)}
      onValueChange={(val) => {
        const vp = EDITOR_VIEWPORTS.find((v) => String(v.width) === val);
        if (vp) setCurrentViewPort(vp);
      }}
    >
      <SelectTrigger className="border-none focus-visible:bg-none cursor-pointer p-0 data-[size=default]:h-fit w-auto outline-none ring-0 focus-visible:ring-0  bg-none">
        <SelectValue>
          {EDITOR_VIEWPORTS.find((vp) => vp.width === currentViewport.width)
            ?.icon ?? "🌐"}
        </SelectValue>
      </SelectTrigger>

      <SelectContent sideOffset={8} alignOffset={-8} className=" border-border">
        {EDITOR_VIEWPORTS.map((vp) => (
          <SelectItem key={vp.width} className=" cursor-pointer" value={String(vp.width)}>
            <div className="flex items-center gap-2">
              {vp.icon}
              <span className=" text-xs">{vp.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

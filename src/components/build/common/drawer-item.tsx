import type { Overrides, UserGenerics } from "@measured/puck";
import { MdDragIndicator } from "react-icons/md";

export const ComponentItemOverride: Overrides<
  UserGenerics["UserRootProps"]
>["componentItem"] = ({ name }) => {
  return (
    <div className=" cursor-pointer p-2 text-foreground border border-border shadow-xs  rounded-md flex text-xs gap-1 items-center">
      <MdDragIndicator />
      {name}
    </div>
  );
};

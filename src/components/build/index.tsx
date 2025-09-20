import type { Config, Overrides } from "@measured/puck";
import { CapconsCustomOutline } from "./layout/outline/custom-outline";
import { CustomOverlay } from "./fields/overlay/custom-overlay";
import { ComponentItemOverride } from "./common/drawer-item";

export const CapconsEditorOverrides:Partial<
  Overrides<Config>
> = {
    outline:CapconsCustomOutline,
    componentOverlay:CustomOverlay,
    drawerItem:ComponentItemOverride
}
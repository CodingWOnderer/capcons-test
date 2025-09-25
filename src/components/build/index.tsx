import type { Config, Overrides } from "@measured/puck";
import { CapconsCustomOutline } from "./layout/outline/custom-outline";
import { CustomOverlay } from "./fields/overlay/custom-overlay";
import { ComponentItemOverride } from "./common/drawer-item";
import { CustomFieldsOverrides } from "./fields";

export const CapconsEditorOverrides: Partial<Overrides<Config>> = {
	fieldTypes: CustomFieldsOverrides,
	outline: CapconsCustomOutline,
	componentOverlay: CustomOverlay,
	drawerItem: ComponentItemOverride,
};

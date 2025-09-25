import type { Config, FieldRenderFunctions } from "@measured/puck";
import { CustomRichTextEditor } from "./texteditor/customEditor";

export const CustomFieldsOverrides: Partial<FieldRenderFunctions<Config>> = {
	richcontent: CustomRichTextEditor,
};

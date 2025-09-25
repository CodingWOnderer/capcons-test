import type { Config, Data } from "@measured/puck";
import { type FieldProps, type BaseField, type Field } from "@measured/puck";
import type { ReactNode, JSX } from "react";

export type EditorConfig = Config<{
	fields: {
		richcontent: { type: "richcontent" };
	};
}>;
export type TemplatePage = {
	config: EditorConfig;
	pageId: string;
	pagename: string;
	pageState: Data;
	path: string;
};

export type EditorTemplate = {
	pages: TemplatePage[];
	templateId: string;
	font: string;
	name: string;
};

export type FieldTypes<TField = {}, TValue = any> = (
	props: Omit<
		FieldProps<Field<any, {}> | (TField & BaseField), any>,
		"field" | "value" | "onChange"
	> & {
		field: TField & BaseField;
		value: TValue;
		name: string;
		onChange: (value: TValue) => void;
		children: ReactNode;
	},
) => JSX.Element;

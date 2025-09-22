import type { Config, Data } from "@measured/puck";

export type TemplatePage = {
	config: Config;
	pageId: string;
	pagename: string;
	pageState:Data;
};

export type EditorTemplate = {
	pages: TemplatePage[];
	templateId: string;
	font: string;
	name: string;
};

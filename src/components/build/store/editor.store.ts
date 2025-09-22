import { create } from "zustand";
import type { EditorTemplate, TemplatePage } from "../types";
import type { Data, Viewport } from "@measured/puck";
import { immer } from "zustand/middleware/immer";
import { EDITOR_VIEWPORTS } from "../utils/viewports";

interface PublishTemplateData {
	templatePages: {
		pageId: string;
		pageName: string;
		websitePageState: Data;
	}[];
	templateId: string;
	templateName: string;
	font?: string;
}

interface EditorStoreState {
	currentTemplate: EditorTemplate | null;
	currentPage: TemplatePage | null;
	websitePagesState: Record<string, Data>;
	currentPageId: string;
	currentTemplateId: string;
	loading: boolean;
	error: string | null;
	viewport: Viewport;
	previewDialogOpen: boolean;
}

interface EditorStoreActions {
	initializeFromTemplate: (template: EditorTemplate) => void;

	setCurrentTemplate: (template: EditorTemplate) => void;
	setCurrentPage: (page: TemplatePage) => void;
	setCurrentPageId: (pageId: string) => void;
	setCurrentTemplateId: (templateId: string) => void;
	setWebsitePagesState: (pagesState: Record<string, Data>) => void;
	setPageState: (pageId: string, data: Data) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	setViewport: (viewport: Viewport) => void;
	setPreviewDialogOpen: (open: boolean) => void;

	getCurrentTemplate: () => EditorTemplate | null;
	getCurrentPage: () => TemplatePage | null;
	getCurrentPageId: () => string;
	getCurrentTemplateId: () => string;
	getWebsitePagesState: () => Record<string, Data>;
	getPageState: (pageId: string) => Data | undefined;
	getLoading: () => boolean;
	getError: () => string | null;
	getViewport: () => Viewport;

	switchPage: (pageId: string) => void;
	clearError: () => void;
	reset: () => void;
	publishTemplate: (font?: string) => PublishTemplateData | null;
}

type EditorStore = EditorStoreState & EditorStoreActions;

const initialState: EditorStoreState = {
	currentTemplate: null,
	currentPage: null,
	websitePagesState: {},
	currentPageId: "",
	currentTemplateId: "",
	loading: false,
	error: null,
	viewport: EDITOR_VIEWPORTS[0],
	previewDialogOpen: false,
};

export const useEditorStore = create<EditorStore>()(
	immer((set, get) => ({
		...initialState,

		initializeFromTemplate: (template: EditorTemplate) => {
			set((state) => {
				state.loading = true;
				state.error = null;
			});

			try {
				if (!template || !template.pages || template.pages.length === 0) {
					throw new Error(
						"Invalid template: Template must have at least one page",
					);
				}

				const firstPage = template.pages[0];

				const pagesState: Record<string, Data> = {};
				template.pages.forEach((page) => {
					pagesState[page.pageId] = page.pageState || {
						root: { props: {} },
						content: [],
						zones: {},
					};
				});

				set((state) => {
					state.currentTemplate = template;
					state.currentTemplateId = template.templateId;
					state.currentPage = firstPage;
					state.currentPageId = firstPage.pageId;
					state.websitePagesState = pagesState;
					state.loading = false;
					state.error = null;
				});
			} catch (error) {
				set((state) => {
					state.loading = false;
					state.error =
						error instanceof Error
							? error.message
							: "Failed to initialize template";
				});
			}
		},

		setCurrentTemplate: (template: EditorTemplate) => {
			set((state) => {
				state.currentTemplate = template;
			});
		},

		setCurrentPage: (page: TemplatePage) => {
			set((state) => {
				state.currentPage = page;
			});
		},

		setCurrentPageId: (pageId: string) => {
			set((state) => {
				state.currentPageId = pageId;
			});
		},

		setCurrentTemplateId: (templateId: string) => {
			set((state) => {
				state.currentTemplateId = templateId;
			});
		},

		setWebsitePagesState: (pagesState: Record<string, Data>) => {
			set((state) => {
				state.websitePagesState = pagesState;
			});
		},

		setPageState: (pageId: string, data: Data) => {
			set((state) => {
				state.websitePagesState[pageId] = {
					...state.websitePagesState[pageId],
					...data,
				};
			});
		},

		setLoading: (loading: boolean) => {
			set((state) => {
				state.loading = loading;
			});
		},

		setError: (error: string | null) => {
			set((state) => {
				state.error = error;
			});
		},

		setViewport: (viewport: Viewport) => {
			set((state) => {
				state.viewport = viewport;
			});
		},

		setPreviewDialogOpen: (open: boolean) => {
			set((state) => {
				state.previewDialogOpen = open;
			});
		},
		getCurrentTemplate: () => get().currentTemplate,

		getCurrentPage: () => get().currentPage,

		getCurrentPageId: () => get().currentPageId,

		getCurrentTemplateId: () => get().currentTemplateId,

		getWebsitePagesState: () => get().websitePagesState,

		getPageState: (pageId: string) => get().websitePagesState[pageId],

		getLoading: () => get().loading,

		getError: () => get().error,

		getViewport: () => get().viewport,

		switchPage: (pageId: string) => {
			set((state) => {
				state.loading = true;
				state.error = null;
			});

			try {
				const template = get().currentTemplate;

				if (!template) {
					throw new Error("No template is currently loaded");
				}

				const page = template.pages.find((p) => p.pageId === pageId);

				if (!page) {
					throw new Error(
						`Page with ID ${pageId} not found in current template`,
					);
				}

				set((state) => {
					state.currentPage = page;
					state.currentPageId = pageId;
					state.loading = false;
					state.error = null;
				});
			} catch (error) {
				set((state) => {
					state.loading = false;
					state.error =
						error instanceof Error ? error.message : "Failed to switch page";
				});
			}
		},

		publishTemplate: (font?: string) => {
			try {
				const state = get();
				const { currentTemplate, websitePagesState } = state;

				if (!currentTemplate) {
					set((state) => {
						state.error = "No template is currently loaded";
					});
					return null;
				}

				if (!currentTemplate.pages || currentTemplate.pages.length === 0) {
					set((state) => {
						state.error = "Template must have at least one page to publish";
					});
					return null;
				}

				const templatePages = currentTemplate.pages.map((page) => {
					const websitePageState = websitePagesState[page.pageId];

					if (!websitePageState) {
						throw new Error(`Page state not found for page: ${page.pageId}`);
					}

					return {
						pageId: page.pageId,
						pageName: page.pagename,
						websitePageState,
					};
				});

				const publishData: PublishTemplateData = {
					templatePages,
					templateId: currentTemplate.templateId,
					templateName: currentTemplate.name,
					...(font && { font }),
				};

				console.log(publishData);

				set((state) => {
					state.error = null;
				});

				return publishData;
			} catch (error) {
				set((state) => {
					state.error =
						error instanceof Error
							? error.message
							: "Failed to publish template";
				});
				return null;
			}
		},

		clearError: () => {
			set((state) => {
				state.error = null;
			});
		},

		reset: () => {
			set(initialState);
		},
	})),
);

export const useCurrentTemplate = () =>
	useEditorStore((state) => state.currentTemplate);
export const useCurrentPage = () =>
	useEditorStore((state) => state.currentPage);
export const useCurrentPageId = () =>
	useEditorStore((state) => state.currentPageId);
export const useCurrentTemplateId = () =>
	useEditorStore((state) => state.currentTemplateId);
export const useWebsitePagesState = () =>
	useEditorStore((state) => state.websitePagesState);
export const useCurrentPageState = () => {
	const currentPageId = useEditorStore((state) => state.currentPageId);
	const pagesState = useEditorStore((state) => state.websitePagesState);
	return currentPageId ? pagesState[currentPageId] : undefined;
};
export const useLoading = () => useEditorStore((state) => state.loading);
export const useError = () => useEditorStore((state) => state.error);
export const useViewport = () => useEditorStore((state) => state.viewport);
export const usePreviewDialogOpen = () =>
  useEditorStore((state) => state.previewDialogOpen);

export type { PublishTemplateData };

import { Puck, type Data } from "@measured/puck";
import {
	useCurrentPage,
	useCurrentPageId,
	useEditorStore,
	useWebsitePagesState,
} from "../store/editor.store";
import { InitialWebsiteDataState } from "../utils/initialstate";
import { EmptyPageState, NoPageSelected } from "./empty-states";
import CompositeEditor from "../layout/composite-editor";
import "@measured/puck/puck.css";
import { useLoaderData, useRouteContext, useSearch } from "@tanstack/react-router";
import React, { useCallback, useEffect } from "react";
import { CapconsWebsiteTemplates } from "../templates";
import { CapconsEditorOverrides } from "..";
import { useTheme } from "next-themes";
 

const WebsitePreviewDialog =React.lazy(()=>import("../common/website-preview"))

export default function WebsiteTemplateEditor() {
	const initializefromtemnplate = useEditorStore(
		(state) => state.initializeFromTemplate,
	);
	const searchData = useSearch({
		from: "/_authenticate/",
	});

	useEffect(() => {
		if (searchData.id) {
			const template = CapconsWebsiteTemplates.find(
				(t) => t.templateId === searchData.id,
			);
			if (template) {
				initializefromtemnplate(template);
			}
		}
	}, [searchData.id, initializefromtemnplate]);

	const currentPageId = useCurrentPageId();
	const theme = useTheme();
	const currentPage = useCurrentPage();
	const currentPageState = useWebsitePagesState();
	const setPageState = useEditorStore((state) => state.setPageState);
	const CurrentData = currentPageId
		? currentPageState[currentPageId]
		: InitialWebsiteDataState;

	const CurrentConfig = currentPage ? currentPage.config : undefined;

	const handlePageState = useCallback(
		(data: Data) => {
			setPageState(currentPageId, data);
		},
		[currentPageId, setPageState],
	);

	if (!currentPageId || !CurrentConfig) {
		return <NoPageSelected />;
	}

	if (!currentPageState) {
		return <EmptyPageState />;
	}
	return (
		<>
			<Puck
				key={`${theme.theme}-${currentPageId}`}
				config={CurrentConfig}
				data={CurrentData}
				overrides={CapconsEditorOverrides}
				onChange={handlePageState}
			>
				<CompositeEditor />
			</Puck>
			<WebsitePreviewDialog />
		</>
	);
}

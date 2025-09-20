import { Render } from "@measured/puck";
import {
	useCurrentPage,
	useCurrentPageId,
	useWebsitePagesState,
} from "../store/editor.store";
import { InitialWebsiteDataState } from "../utils/initialstate";
import type { JSX } from "react";
import { EmptyPageState, NoPageSelected } from "./empty-states";

export default function WebsitePreviewRenderer(): JSX.Element {
	const currentPageId = useCurrentPageId();
	const currentPage = useCurrentPage();
	const currentPageState = useWebsitePagesState();

	const CurrentData = currentPageId
		? currentPageState[currentPageId]
		: InitialWebsiteDataState;
	const CurrentConfig = currentPage ? currentPage.config : undefined;

	if (!currentPageId || !CurrentConfig) {
		return <NoPageSelected/>
	}

	if (!currentPageState) {
		return <EmptyPageState/>
	}

	return (
		<div>
			<Render config={CurrentConfig} data={CurrentData} />
		</div>
	);
}

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
import { useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { CapconsWebsiteTemplates } from "../templates";
import { CapconsEditorOverrides } from "..";
import { useTheme } from "next-themes";

export default function WebsiteTemplateEditor() {
  const initializefromtemnplate = useEditorStore((state)=>state.initializeFromTemplate)
  const searchData = useSearch({
    from:"/_authenticate/",
  })
  
 useEffect(() => {
  if (searchData.id) {
    const template = CapconsWebsiteTemplates.find(t => t.templateId === searchData.id);
    if (template) {
      initializefromtemnplate(template);
    }
  }
}, [searchData.id, initializefromtemnplate])

  const currentPageId = useCurrentPageId();
  const theme = useTheme();
  const currentPage = useCurrentPage();
  const currentPageState = useWebsitePagesState();
  const setPageState = useEditorStore((state) => state.setPageState);

  const CurrentData = currentPageId
    ? currentPageState[currentPageId]
    : InitialWebsiteDataState;
  const CurrentConfig = currentPage ? currentPage.config : undefined;

  const handlePageState = (data: Data) => setPageState(currentPageId, data);

  if (!currentPageId || !CurrentConfig) {
    return <NoPageSelected />;
  }

  if (!currentPageState) {
    return <EmptyPageState />;
  }
  return (
    <Puck
      key={theme.theme}
      config={CurrentConfig}
      data={CurrentData}
      overrides={CapconsEditorOverrides}
      onChange={handlePageState}
    >
      <CompositeEditor />
    </Puck>
  );
}

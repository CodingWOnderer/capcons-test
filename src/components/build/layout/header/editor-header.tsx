/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import { PiSidebarSimple, PiSidebarSimpleFill } from "react-icons/pi";
import { useEditorEngine } from "../../hooks/useEditorEngine";
import PageSelector from "../_components/pageSelector";
import PublishButton from "../_components/PublishButton";

const COMPANY_NAME = "TeddyBoy";

export default function EditorHeader() {
  const dispatch = useEditorEngine((s) => s.dispatch);
  const leftSideBarVisible = useEditorEngine(
    (s) => s.appState.ui.leftSideBarVisible
  );
  const rightSideBarVisible = useEditorEngine(
    (s) => s.appState.ui.rightSideBarVisible
  );

  const toggleLeftSidebar = () => {
    dispatch({
      type: "setUi",
      ui: {
        leftSideBarVisible: !leftSideBarVisible,
      },
    });
  };

  const toggleRightSidebar = () => {
    dispatch({
      type: "setUi",
      ui: {
        rightSideBarVisible: !rightSideBarVisible,
      },
    });
  };

  return (
    <div onClick={() => dispatch({ type: "setUi", ui: { itemSelector: null } })} className="border-b border-border px-4 flex justify-between py-2 items-center bg-background">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleLeftSidebar}
          className="transition-all duration-200 flex items-center justify-center"
        >
          {leftSideBarVisible ? (
            <PiSidebarSimpleFill className="w-5 h-5 text-foreground scale-x-[-1]" />
          ) : (
            <PiSidebarSimple className="w-5 h-5 text-foreground scale-x-[-1]" />
          )}
        </button>
      </div>
      <div className="flex text-xs text-foreground items-center">
        <span>{COMPANY_NAME}</span>
        <span className="px-1 text-sm text-muted-foreground">/</span>
        <PageSelector />
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleRightSidebar}
          className="transition-all duration-200 flex items-center justify-center"
        >
          {rightSideBarVisible ? (
            <PiSidebarSimpleFill className="w-5 h-5 text-foreground scale-x-[-1]" />
          ) : (
            <PiSidebarSimple className="w-5 h-5 text-foreground scale-x-[-1]" />
          )}
        </button>
        <PublishButton />
      </div>
    </div>
  );
}

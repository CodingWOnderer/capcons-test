// CustomRichTextEditor.tsx
import type { FieldTypes } from "../../types";
import { useState, useCallback, useMemo } from "react";
import { Dialog } from "@/components/v1/dialog/dialog";
import { Button } from "@/components/v1/button/button";
import { useEditorEngine } from "../../hooks/useEditorEngine";
import _ from "lodash";

export const CustomRichTextEditor: FieldTypes<{
  placeholder?: string;
  contentEditable?: boolean;
}> = (props) => {
  console.log(props.value);
  const [open, setOpen] = useState(false);
  const [editorKey, setEditorKey] = useState(0);
  const dispatch = useEditorEngine((s) => s.dispatch);

  const handleClose = useCallback(() => {
    setOpen(false);
    dispatch({ type: "setUi", ui: { itemSelector: null } });
  }, [dispatch]);

  const handleOpen = useCallback(() => {
    setEditorKey((prev) => prev + 1);
    setOpen(true);
  }, []);

  const debouncedOnChange = useMemo(
    () =>
      _.debounce((newValue: string) => {
        props.onChange(newValue);
      }, 300),
    [props.onChange]
  );

  const editorId = useMemo(() => {
    return props.id || `editor-${Math.random().toString(36).substr(2, 9)}`;
  }, [props.id]);

  return (
    <>
      <Button onClick={handleOpen}>Open Editor</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="sm:max-w-none rounded-none ring-0 border-none outline-none h-screen overflow-clip"
      >
        {/* <TextEditor
          key={`${editorId}-${editorKey}`}
          initialContent={props.value || ""}
          onUpdate={debouncedOnChange}
        /> */}
        <div></div>
      </Dialog>
    </>
  );
};

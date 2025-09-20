import React, { type JSX } from "react";

const Editor = React.lazy(() => import("@/components/build/editor/client"));

export default function WebsiteBuilderPage():JSX.Element {
  return <Editor />;
}

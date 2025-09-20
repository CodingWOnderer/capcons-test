import React, { Suspense } from "react";
import WebsiteRendererSkeleton from "../components/renderer-skeleton";

const WebsitePreviewRenderer = React.lazy(
  () => import("@/components/build/editor/renderer"),
);

export const DashboardLayout = () => {
  return (
    <Suspense fallback={<WebsiteRendererSkeleton />}>
      <WebsitePreviewRenderer />
    </Suspense>
  );
};

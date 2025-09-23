import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { RefundSection } from "./_components/refund-section";

export const TeddyBoyRefundPageTemplate: TemplatePage = {
  config: {
    root: TeddyBoyTemplateRoot,
    components: {
      RefundPage: {
        fields: {},
        defaultProps: {},
        render: () => {
          return <RefundSection />;
        },
      },
    },
  },
  pageState: {
    root: {
      props: {},
    },
    content: [
      {
        type: "RefundPage",
        props: {
          id: "RefundPage-accfce43-0f1a-4454-b399-022c8b1b2735",
        },
      },
    ],
    zones: {},
  },
  path: "/refund",
  pagename: "Refund Page",
  pageId: "d4a548c1-a3b1-446b-a48d-56ca8d19054a",
};

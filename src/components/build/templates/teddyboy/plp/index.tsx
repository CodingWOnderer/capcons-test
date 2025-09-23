import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import ProductListingPage from "./_components/product-listing-page";

export const TeddyBoyProductListingPageTemplate: TemplatePage = {
  config: {
    root: TeddyBoyTemplateRoot,
    components: {
      ProductListingPage: {
        fields: {
          title: { type: "text", contentEditable: true },
          description: { type: "text", contentEditable: true },
        },
        defaultProps: {
          title: "Our Collection",
          description:
            "Fresh, versatile fashion that moves with you—wherever life takes you.",
        },
        render: ({ title, description }) => {
          return <ProductListingPage title={title} description={description} />;
        },
      },
    },
  },

  pagename: "ProductListing Page",
  pageId: "a4341921-387a-4bf3-9691-8a4b0a51d1a0",
  path: "/plp",
  pageState: {
    root: {
      props: {},
    },
    content: [
      {
        type: "ProductListingPage",
        props: {
          title: "Our Collection",
          description:
            "Fresh, versatile fashion that moves with you—wherever life takes you.",
          id: "ProductListingPage-1c9a3b53-7701-47e4-a3ca-21525918dd66",
        },
      },
    ],

    zones: {},
  },
};

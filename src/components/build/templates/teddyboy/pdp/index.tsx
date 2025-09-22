import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import ProductDetailPage from "./_components/page-detail-page";

export const TeddyBoyProductDetailPageTemplate: TemplatePage = {
	config: {
		root: TeddyBoyTemplateRoot,
		components: {
			ProductDetailPage: {
				fields: {},
				defaultProps: {},
				render: () => {
					return <ProductDetailPage />;
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
				type: "ProductDetailPage",
				props: {
					id: "ProductDetailPage-933f7e5f-db9f-428f-82d7-ff44427af793",
				},
			},
		],
		zones: {},
	},
	pagename: "ProductDetail Page",
	pageId: "66a1cddd-178a-4004-89d0-072e9a1db295",
};

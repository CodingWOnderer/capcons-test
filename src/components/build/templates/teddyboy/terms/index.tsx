import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { TermsAndConditions } from "./_components/terms-section";

export const TeddyBoyTermsAndConditionPageTemplate: TemplatePage = {
	config: {
		root: TeddyBoyTemplateRoot,
		components: {
			TermsAndConditionPage: {
				fields: {},
				defaultProps: {},
				render: () => {
					return <TermsAndConditions />;
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
				type: "TermsAndConditionPage",
				props: {
					id: "TermsAndConditionPage-27ce0abf-f06b-4307-9056-64a2da0f928d",
				},
			},
		],
		zones: {},
	},
	path:"/terms",
	pagename: "TermsAndCondition Page",
	pageId: "5fea0d41-08fa-4ca9-9401-05dc8f40617f",
};

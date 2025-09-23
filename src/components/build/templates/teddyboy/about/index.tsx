import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { AboutSection } from "./_components/about-section";

export const TeddyBoyAboutPageTemplate: TemplatePage = {
	config: {
		root: TeddyBoyTemplateRoot,
		components: {
			AboutPage: {
				fields: {},
				defaultProps: {},
				render: () => {
					return <AboutSection />;
				},
			},
		},
	},
	path:"/aboutus",
	pageState: {
		root: {
			props: {},
		},
		content: [
			{
				type: "AboutPage",
				props: {
					id: "AboutPage-0407612c-a9d6-4740-adb9-13282171ff39",
				},
			},
		],
		zones: {},
	},
	pagename: "About Page",
	pageId: "d8e0946a-7d13-4ada-a1e4-0576b8649013",
};

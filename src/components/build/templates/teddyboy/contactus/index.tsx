import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import ContactusSection from "./_components/contactus-section";

export const TeddyBoyContactusPageTemplate: TemplatePage = {
	config: {
		root: TeddyBoyTemplateRoot,
		components: {
			ContactusPage: {
				fields: {},
				defaultProps: {},
				render: () => {
					return <ContactusSection />;
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
				type: "ContactusPage",
				props: {
					id: "ContactusPage-b17b92df-6e55-4da2-8654-ce361cbbbde4",
				},
			},
		],
		zones: {},
	},
	pagename: "Contactus Page",
	pageId: "2d229a14-e9c1-402e-834d-08ab78825086",
};

import type { EditorTemplate } from "../../types";
import { TeddyBoyAboutPageTemplate } from "./about";
import { TeddyBoyContactusPageTemplate } from "./contactus";
import { TeddyBoyLandingPageTemplate } from "./landing";
import { TeddyBoyProductDetailPageTemplate } from "./pdp";
import { TeddyBoyProductListingPageTemplate } from "./plp";
import { TeddyBoyPrivacyPageTemplate } from "./privacy";
import { TeddyBoyRefundPageTemplate } from "./refund";
import { TeddyBoyTermsAndConditionPageTemplate } from "./terms";

export const TeddyBoyTemplate: EditorTemplate = {
	pages: [
		TeddyBoyLandingPageTemplate,
		TeddyBoyProductListingPageTemplate,
		TeddyBoyProductDetailPageTemplate,
		TeddyBoyRefundPageTemplate,
		TeddyBoyPrivacyPageTemplate,
        TeddyBoyAboutPageTemplate,
        TeddyBoyContactusPageTemplate,
		TeddyBoyTermsAndConditionPageTemplate
	],
	templateId: "78110131-a343-427e-9bca-9f28e58df729",
	name: "Teddy Boy",
	font: "",
};

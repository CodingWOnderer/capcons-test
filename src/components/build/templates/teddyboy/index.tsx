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
	templateId: "68d13f3f42bbd37fc625b5ed",
	name: "Teddy Boy",
	font: "",
};

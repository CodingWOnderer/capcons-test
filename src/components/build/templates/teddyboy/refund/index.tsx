import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { RefundSection } from "./_components/refund-section";

export const TeddyBoyRefundPageTemplate: TemplatePage = {
  config: {
    root: TeddyBoyTemplateRoot,
    components: {
      RefundPage: {
        fields: {
          refundpolicies: { type: "richcontent" },
        },
        defaultProps: {},
        render: (props) => {
          return <RefundSection html={props.refundpolicies} />;
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
          refundpolicies: `
 <main>
        <header>
          <h1 className="sm:text-xl">TEDDYBOY Return & Refund Policy</h1>
        </header>

        <section id="returns-exchanges">
          <h2>1. Returns and Exchanges</h2>
          <p>
            <strong>Timeframe:</strong> Returns or exchanges are accepted within{" "}
            <time dateTime="P7D">7 days</time> from the date of delivery.
          </p>
          <p>
            <strong>Reverse Shipment Fee:</strong> A fee of up to ₹100 per item
            may be deducted as per our Fair Usage Policy.
          </p>

          <h3>Return Pickup Attempts</h3>
          <ul>
            <li>Pickups attempted within 24–48 hours from request date.</li>
            <li>Maximum of three pickup attempts.</li>
            <li>Subject to service availability in your area.</li>
          </ul>
        </section>

        <section id="refund-process">
          <h2>2. Refund Process</h2>

          <article>
            <h3>For COD Orders</h3>
            <p>
              Refunds will be processed to your <strong>TeddyBoy Wallet</strong>{" "}
              within 1–2 working days after return pickup is completed.
            </p>
            <p>Wallet balance can be tracked via the TeddyBoy platform.</p>
            <p>
              <strong>Note:</strong> COD payments can be refunded via Direct
              Bank Transfer or UPI, usable for future purchases.
            </p>
          </article>

          <article>
            <h3>For Prepaid Orders</h3>
            <p>
              Refunds will be credited to your original payment method within
              1–2 working days after the return pickup is completed.
            </p>
            <ul>
              <li>
                Reward points, store credits & shipping charges (if any) are
                non-refundable.
              </li>
            </ul>
          </article>
        </section>

        <section id="conditions">
          <h2>3. Conditions for Returns</h2>
          <ul>
            <li>Items must be in their original condition with intact tags.</li>
            <li>
              Products that are visibly used, worn, or returned in poor
              condition will not qualify for a refund.
            </li>
          </ul>
        </section>

        <section id="exclusions">
          <h2>4. Non-Returnable Items / Exclusions</h2>
          <p>To maintain hygiene standards, returns are not accepted for:</p>
          <ul>
            <li>Accessories</li>
            <li>Sunglasses</li>
            <li>Perfumes</li>
            <li>Masks</li>
            <li>Innerwear (boxers, briefs, trunks)</li>
          </ul>
          <p>
            <em>Note:</em> TEDDYBOY reserves the right to update excluded
            categories without prior notice.
          </p>
        </section>

        <section id="self-shipping">
          <h2>5. Self-Shipping for Returns</h2>
          <p>
            If reverse pickup is unavailable in your area, please ship the
            product(s) to:
          </p>
          <address>
            <strong>TEDDYBOY WAREHOUSE</strong>
            <br />
            G-16 Lawrencce Road Industrial Area, 2nd Floor
            <br />
            Delhi 110035, India
          </address>

          <h3>Shipping Instructions</h3>
          <ul>
            <li>Pack items securely to prevent loss or damage.</li>
            <li>
              Include your <strong>Order ID</strong> and registered mobile
              number on the package.
            </li>
            <li>Ensure items are unused with original tags and packaging.</li>
          </ul>

          <h3>Reimbursement</h3>
          <ul>
            <li>
              Prepaid orders: Full amount + ₹100 courier reimbursement (to bank
              account).
            </li>
            <li>COD orders: Refund credited to customer account.</li>
          </ul>
          <p>
            <strong>Note:</strong> Do not use The Professional Couriers (not
            accepted). We recommend <strong>Speed Post</strong> for reliable
            service.
          </p>
        </section>

        <section id="terms">
          <h2>6. Terms and Conditions</h2>
          <ul>
            <li>
              Customer must provide accurate bank account details for refunds.
              TEDDYBOY is not liable for errors.
            </li>
            <li>
              If you receive delivery confirmation but not the package, report
              it within <time dateTime="P1D">24 hours</time>.
            </li>
          </ul>
        </section>

        <section id="damages">
          <h2>7. Reporting Damages</h2>
          <p>
            If the product is damaged or below standards at delivery, notify us
            within <time dateTime="P1D">1 day</time> via:
          </p>
          <ul>
            <li>
              Instagram DM:{" "}
              <a href="https://instagram.com/teddy_boy_denim" target="_blank">
                @teddy_boy_denim
              </a>
            </li>
            <li>
              WhatsApp: <a href="tel:+919310485375">+91 9310485375</a>
            </li>
          </ul>
          <p>
            After inspection of the returned product, we’ll inform you about
            refund eligibility. Refunds are processed within{" "}
            <time dateTime="P30D">30 working days</time> from confirmation.
          </p>
          <p>
            For help, contact us on Instagram or WhatsApp — we’re happy to
            assist!
          </p>
        </section>
      </main>`,
        },
      },
    ],
    zones: {},
  },
  path: "/refund",
  pagename: "Refund Page",
  pageId: "d4a548c1-a3b1-446b-a48d-56ca8d19054a",
};

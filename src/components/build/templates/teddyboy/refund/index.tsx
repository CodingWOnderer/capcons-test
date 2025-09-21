import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { RefundSection } from "./_components/refund-section";

export const TeddyBoyRefundPageTemplate:TemplatePage = {
    config:{
        root:TeddyBoyTemplateRoot,
        components:{
            RefundPage:{
                fields:{},
                defaultProps:{},
                render:()=>{
                    return <RefundSection/>
                }
            }
        }
    },
    pagename:"Refund Page",
    pageId:"d4a548c1-a3b1-446b-a48d-56ca8d19054a"
}
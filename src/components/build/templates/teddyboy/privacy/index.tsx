import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { PrivacySection } from "./_components/privacy-section";

export const TeddyBoyPrivacyPageTemplate:TemplatePage = {
    config:{
        root:TeddyBoyTemplateRoot,
        components:{
            PrivacyPage:{
                fields:{},
                defaultProps:{},
                render:()=>{
                    return <PrivacySection/>
                }
            }
        }
    },
    pagename:"Privacy Page",
    pageId:"ab78ad6b-1c0a-4e1a-aa7e-8315c7bd2d87"
}
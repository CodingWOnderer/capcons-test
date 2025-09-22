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
    pageState:{
    "root": {
        "props": {}
    },
    "content": [
        {
            "type": "PrivacyPage",
            "props": {
                "id": "PrivacyPage-283d24fc-00ee-4433-8159-775c4da2f9ea"
            }
        }
    ],
    "zones": {}
},
    pagename:"Privacy Page",
    pageId:"ab78ad6b-1c0a-4e1a-aa7e-8315c7bd2d87"
}
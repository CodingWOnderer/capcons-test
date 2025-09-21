import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import ContactusSection from "./_components/contactus-section";

export const TeddyBoyContactusPageTemplate:TemplatePage = {
    config:{
        root:TeddyBoyTemplateRoot,
        components:{
            ContactusPage:{
                fields:{},
                defaultProps:{},
                render:()=>{
                    return <ContactusSection/>
                }
            }
        }
    },
    pagename:"Contactus Page",
    pageId:"2d229a14-e9c1-402e-834d-08ab78825086"
}
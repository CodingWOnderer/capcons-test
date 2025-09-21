import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import { AboutSection } from "./_components/about-section";

export const TeddyBoyAboutPageTemplate:TemplatePage = {
    config:{
        root:TeddyBoyTemplateRoot,
        components:{
            AboutPage:{
                fields:{},
                defaultProps:{},
                render:()=>{
                    return <AboutSection/>
                }
            }
        }
    },
    pagename:"About Page",
    pageId:"d8e0946a-7d13-4ada-a1e4-0576b8649013"
}
import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import ProductDetailPage from "./_components/page-detail-page";

export const TeddyBoyProductDetailPageTemplate:TemplatePage = {
    config:{
        root:TeddyBoyTemplateRoot,
        components:{
            ProductDetailPage:{
                fields:{},
                defaultProps:{},
                render:()=>{
                    return <ProductDetailPage/>
                }
            }
        }
    },
    pagename:"ProductDetail Page",
    pageId:"66a1cddd-178a-4004-89d0-072e9a1db295"
}
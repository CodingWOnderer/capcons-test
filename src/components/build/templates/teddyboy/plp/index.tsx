import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import ProductListingPage from "./_components/product-listing-page";

export const TeddyBoyProductListingPageTemplate:TemplatePage = {
    config:{
        root:TeddyBoyTemplateRoot,
        components:{
            ProductListingPage:{
                fields:{},
                defaultProps:{},
                render:()=>{
                    return <ProductListingPage/>
                }
            }
        }
    },
    pagename:"ProductListing Page",
    pageId:"a4341921-387a-4bf3-9691-8a4b0a51d1a0"
}
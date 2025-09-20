import type { TemplatePage } from "@/components/build/types";
import LandingPage from "./landing";
import { TeddyBoyTemplateRoot } from "../root";
import HeroCarousel from "./_components/HeroCarousel";
import FeaturedCategories from "./_components/CategoriesSection";

export const TeddyBoyLandingPageTemplate:TemplatePage = {
    config: {
        root: TeddyBoyTemplateRoot,
        components: {
            HeroSection:{
                fields:{
                    title:{type:"text",contentEditable:true}
                },
                defaultProps:{
                    title:"Hello world"
                },
                render:({title})=>{
                    return <HeroCarousel />
                }
            },
            FeaturedSection:{
                fields:{
                    title:{type:"text",contentEditable:true}
                },
                defaultProps:{
                    title:"Hello world"
                },
                render:({title})=>{
                    return <FeaturedCategories />
                }
            }
        },
    },
    pageId: "8d0c3a26-78df-46ef-bae2-6d767fe28240",
    pagename: "Landing"
}
import type { Data } from "@measured/puck";

export interface TCircleTemplate{
    _id:string;
    name:string;
    preview:string;
    description:string;
    category:string;
    font:string;
    pages:{
        _id:string;
        name:string;
        template_id:string;
        website_page_state:string;
        path:string;
        preview:string;
        description:string;
    }[]
}
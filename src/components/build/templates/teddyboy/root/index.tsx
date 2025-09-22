import type { RootConfig } from "@measured/puck";
import { TeddyBoyHeader } from "./header/header";
import Footer from "./footer/footer";
import MenuDockStatic from "./dock/mobile-dock";
import TopBanner from "./topbanner/top-banner";

export const TeddyBoyTemplateRoot: RootConfig = {
  fields: {},
  render: ({ children, puck, id, editMode }) => {
    return (
      <div className=" flex flex-col">
        <TopBanner/>
        <div className=" max-w-7xl mx-auto w-full">
          <TeddyBoyHeader />
        <div className="flex-1">
            {children}
        </div>
        </div>
        <Footer/>
        <MenuDockStatic/>
      </div>
    );
  },
};

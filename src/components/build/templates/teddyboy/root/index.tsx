import type { RootConfig } from "@measured/puck";
import { TeddyBoyHeader } from "./header/header";
import Footer from "./footer/footer";
import MenuDockStatic from "./dock/mobile-dock";

export const TeddyBoyTemplateRoot: RootConfig = {
  fields: {},
  render: ({ children, puck, id, editMode }) => {
    return (
      <div className=" flex flex-col">
        <TeddyBoyHeader />
        <div className="flex-1">
            {children}
        </div>
        <Footer/>
        <MenuDockStatic/>
      </div>
    );
  },
};

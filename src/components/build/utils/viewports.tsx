import { type Viewport } from "@measured/puck";
import { Monitor, Tablet, Smartphone } from "lucide-react";

export const EDITOR_VIEWPORTS: Viewport[] = [
  {
    width: 1280,
    height: "auto",
    label: "Desktop",
    icon: <Monitor size={14} strokeWidth={1.5} />,
  },
  {
    width: 768,
    height: "auto",
    label: "Tablet",
    icon: <Tablet size={14} strokeWidth={1.5} />,
  },
  {
    width: 360,
    height: "auto",
    label: "Mobile",
    icon: <Smartphone size={14} strokeWidth={1.5} />,
  },
];


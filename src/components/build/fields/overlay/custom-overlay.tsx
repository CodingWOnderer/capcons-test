import { cn } from "@/lib/utils";

export const CustomOverlay = ({
  children,
  hover,
  isSelected,
  componentId,
}: {
  children: React.ReactNode;
  hover: boolean;
  isSelected: boolean;
  componentId: string;
  componentType: string;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: hover ? "var(--color-blue-600)" : "transparent",
        outline: isSelected ? "2px solid darkgreen" : "",
        opacity: 0.1,
      }}
    
    >
      {children}
    </div>
  );
};

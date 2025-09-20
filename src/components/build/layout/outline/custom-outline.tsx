import type React from "react";

export const CapconsCustomOutline = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className=" [&_.lucide]:stroke-current [&_[class*='Layer-name']]:text-primary [&_[class*='Layer-icon']]:!mt-0  [&_.lucide]:stroke-1.5 [&_[class*='Layer-clickable']_[class*='Layer-title']]:flex [&_[class*='Layer-clickable']_[class*='Layer-title']]:items-center [&_[class*='Layer-clickable']_[class*='Layer-title']]:justify-center [&_[class*='Layer-clickable']_[class*='Layer-title']]:gap-4  [&_.lucide]:text-primary  [&_li[class*='Layer']:not([class*='Layer--isSelected']):hover]:bg-blue-50
    [&_li[class*='Layer']:not([class*='Layer--isSelected']):hover]:border-blue-500"
    >
      {children}
    </div>
  );
};

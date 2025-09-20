import { type ButtonHTMLAttributes, forwardRef, type ReactNode, type JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { RiLoader4Line } from "react-icons/ri";


type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  // loading state
  isLoading?: boolean;
};

const buttonVariants = cva(
  [
    "button",
    "transition-all",
    "font-inter font-medium",
    "cursor-pointer",
    "inline-flex items-center justify-center",
    "relative",
    "whitespace-nowrap"
  ],
  {
    variants: {
      colorSchema: {
        primary: ["bg-primary", "dark:text-black ", "border-primary bg-opacity-90 hover:bg-opacity-100"],
        secondary: ["bg-mineshaft", "text-gray-300", "border-mineshaft hover:bg-opacity-80"],
        danger: ["!bg-red-500", "!text-white", "!border-red-500/60 hover:!bg-opacity-90"],
        gray: ["bg-bunker-500", "text-bunker-200"]
      },
      variant: {
        solid: "",
        outline: ["bg-transparent", "border-2", "border-solid"],
        plain: "",
        selected: "",
        outline_bg: "",
        // a constant color not in use on hover or click goes colorSchema color
        star: "text-bunker-200 bg-mineshaft-700 border-mineshaft-600",
        link: "text-primary !p-0 bg-transparent outline-none border-none"
      },
      isDisabled: {
        true: "bg-mineshaft-700 border border-mineshaft-600 text-white opacity-50 cursor-not-allowed",
        false: "border"
      },
      isFullWidth: {
        true: "w-full",
        false: ""
      },
      isRounded: {
        true: "rounded-md",
        false: ""
      },
      size: {
        xs: ["text-xs", "py-1", "px-2"],
        sm: ["text-sm", "py-2", "px-4"],
        md: ["text-md", "py-2", "px-5"],
        lg: ["text-lg", "py-2", "px-6"]
      }
    },
    compoundVariants: [
      {
        colorSchema: "primary",
        variant: "star",
        className:
          "bg-mineshaft-700 border border-mineshaft-600 hover:bg-primary text-white dark:hover:text-black hover:border-primary-400 duration-100"
      },
      {
        colorSchema: "primary",
        variant: "solid",
        className: "dark:text-black  bg-primary-500/90  hover:bg-primary text-white dark:hover:text-black"
      },
      {
        colorSchema: "primary",
        variant: "selected",
        className: "bg-primary/10 border border-primary/50 text-bunker-200"
      },
      {
        colorSchema: "primary",
        variant: "outline_bg",
        className:
          "bg-mineshaft-600 border border-mineshaft-500 hover:bg-primary/[0.1] hover:border-primary/40 text-bunker-200"
      },
      {
        colorSchema: "secondary",
        variant: "star",
        className:
          "bg-mineshaft-700 border border-mineshaft-600 hover:bg-mineshaft hover:text-white"
      },
      {
        colorSchema: "danger",
        variant: "star",
        className: "hover:bg-red-500 hover:text-white"
      },
      {
        colorSchema: "primary",
        variant: "outline",
        className: "text-primary hover:bg-primary hover:text-black"
      },
      {
        colorSchema: "secondary",
        variant: "outline",
        className: "border-mineshaft-700 hover:border-mineshaft-500"
      },
      {
        colorSchema: "danger",
        variant: "outline",
        className: "text-red hover:bg-red-500 hover:text-black"
      },
      {
        colorSchema: "danger",
        variant: "outline_bg",
        className:
          "bg-mineshaft-600 border border-red-500 hover:bg-red/[0.1] hover:border-red/40 text-red-500"
      },
      {
        colorSchema: "primary",
        variant: "plain",
        className: "text-primary"
      },
      {
        colorSchema: "gray",
        variant: "plain",
        className: "bg-transparent text-bunker-200"
      },
      {
        colorSchema: "secondary",
        variant: "plain",
        className: "text-mineshaft-300 hover:text-mineshaft-200 border-none"
      },
      {
        colorSchema: "danger",
        variant: "plain",
        className: "text-red"
      },
      {
        colorSchema: ["danger", "primary", "secondary"],
        variant: ["plain"],
        className: "bg-transparent py-1 px-1"
      }
    ]
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  Props;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isDisabled = false,
      className = "",
      size = "sm",
      variant = "solid",
      isFullWidth,
      isRounded = true,
      leftIcon,
      rightIcon,
      isLoading,
      colorSchema = "primary",
      ...props
    },
    ref
  ): JSX.Element => {
    const loadingToggleClass = isLoading ? "opacity-0" : "opacity-100";

    return (
      <button
        ref={ref}
        aria-disabled={isDisabled}
        type="button"
        className={twMerge(
          buttonVariants({
            colorSchema,
            size,
            variant,
            isRounded,
            isDisabled,
            isFullWidth,
            className
          })
        )}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && (
          <RiLoader4Line
            className="absolute w-8 animate-spin rounded-xl opacity-80"
            size={16}
          />
        )}
        {leftIcon && (
          <div
            className={twMerge(
              "inline-flex shrink-0 cursor-pointer items-center justify-center transition-all",
              loadingToggleClass,
              size === "xs" ? "mr-1" : "mr-2"
            )}
          >
            {leftIcon}
          </div>
        )}
        <span
          className={twMerge(
            "transition-all",
            isFullWidth ? "w-full" : "w-min",
            loadingToggleClass
          )}
        >
          {children}
        </span>
        {rightIcon && (
          <div
            className={twMerge(
              "inline-flex shrink-0 cursor-pointer items-center justify-center transition-all",
              loadingToggleClass
            )}
          >
            {rightIcon}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}

import * as Headless from "@headlessui/react";
import { type ChangeEvent, forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cva,type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// 🔹 Slot wrapper for icons
export function InputGroup({ children }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="control"
      className={clsx(
        "relative isolate block",
        "has-[[data-slot=icon]:first-child]:[&_input]:pl-10 has-[[data-slot=icon]:last-child]:[&_input]:pr-10 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8",
        "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4",
        "[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5",
        "*:data-[slot=icon]:text-mineshaft-500 dark:*:data-[slot=icon]:text-mineshaft-400"
      )}
    >
      {children}
    </span>
  );
}

// ✅ Variants for input styles
const inputVariants = cva(
  "relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] placeholder:text-xs/6 sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] focus:outline-hidden",
  {
    variants: {
      size: {
        xs: "text-xs py-1.5 px-2",
        sm: "text-sm py-2 px-3",
        md: "text-base py-2.5 px-3.5",
        lg: "text-lg py-3 px-4",
      },
      variant: {
        filled: "bg-white dark:bg-white/5 border border-mineshaft/10 dark:border-white/10",
        outline: "bg-transparent border border-mineshaft/20 dark:border-white/20",
        plain: "bg-transparent border-none shadow-none",
      },
      isError: {
        true: "focus:ring-red/50 placeholder-red-300",
        false: "focus:ring-primary-400/50 focus:ring-1"
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed bg-mineshaft-100 dark:bg-mineshaft-800",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
      isError: false,
      isDisabled: false,
    },
  }
);

type ExtraProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isRequired?: boolean;
  isReadOnly?: boolean;
  autoCapitalization?: boolean;
  containerClassName?: string;
  isFullWidth?:boolean
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants> &
  ExtraProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      leftIcon,
      rightIcon,
      isRequired,
      isReadOnly,
      isDisabled,
      isError,
      autoCapitalization,
      variant,
      size,
      isFullWidth,
      ...props
    },
    ref
  ) => {
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      if (autoCapitalization) {
        event.target.value = event.target.value.toUpperCase();
      }
    };

    return (
      <div
        className={twMerge(
          "relative flex items-center",
          isFullWidth && "w-full",
          isDisabled && "pointer-events-none",
          containerClassName
        )}
      >
        {leftIcon && (
          <span data-slot="icon" className="absolute left-0 ml-3 text-sm">
            {leftIcon}
          </span>
        )}

        <Headless.Input
          ref={ref}
          required={isRequired}
          readOnly={isReadOnly}
          disabled={Boolean(isDisabled)}
          onInput={handleInput}
          {...props}
          className={twMerge(
            inputVariants({ className, size, variant, isError, isDisabled }),
            leftIcon ? "pl-10" : "pl-3",
            rightIcon ? "pr-10" : "pr-3"
          )}
        />

        {rightIcon && (
          <span data-slot="icon" className="absolute right-0 mr-3 text-sm">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

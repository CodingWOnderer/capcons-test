import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input, type InputProps } from "@/components/v1/input/input";

interface PasswordInputProps extends InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  disabled?: boolean;
}

export function PasswordInput({
  placeholder = "Enter your password",
  className,
  type = "password",
  disabled = false,
  ...field
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Input
        {...field}
        type={isVisible ? "text" : type}
        placeholder={placeholder}
        className={`${className} pe-9 text-xs/6 !placeholder:text-sm/6 h-10 shadow-none focus-visible:z-10`}
        disabled={disabled}
        value={field.value}
        onChange={field.onChange}
        size={"xs"}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        disabled={disabled}
        className="   absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
      >
        {isVisible ? (
          <EyeOffIcon size={16} aria-hidden="true" />
        ) : (
          <EyeIcon size={16} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

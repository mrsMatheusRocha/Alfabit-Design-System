export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"]
) {
  switch (variant) {
    case "primary":
      return disabled ? "bg-disabled text-disabled" : "bg-primary text-white";
    case "secondary":
      return disabled
        ? "bg-disabled text-disabled"
        : "bg-quaternary text-primary";
    case "tertiary":
      return disabled ? "text-disabled" : "text-primary";
    default:
      return disabled ? "bg-disabled text-disabled" : "";
  }
}

export default function Button({
  variant = "primary",
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const generalStyles = "rounded-md px-lg py-2xs";
  return (
    <button
      className={`${generalStyles} ${getVariant(
        variant,
        disabled
      )} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

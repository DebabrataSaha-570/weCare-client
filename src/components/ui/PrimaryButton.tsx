import { MouseEventHandler, ReactNode } from "react";

type TPrimaryButton = {
  children: ReactNode;
  className?: string;
  type?: "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = ({
  children,
  className,
  type,
  onClick,
}: TPrimaryButton) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 text-[--color4] font-semibold uppercase text-base bg-primary px-6 py-4 rounded-full   hover:bg-[--color1] transition duration-700  focus:bg-[--color1]   ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

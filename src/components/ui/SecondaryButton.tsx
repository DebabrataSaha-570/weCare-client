import { ReactNode } from "react";

type TSecondaryButton = {
  children: ReactNode;
  className?: string;
};

const SecondaryButton = ({ children, className }: TSecondaryButton) => {
  return (
    <>
      <button
        className={`items-center  text-base font-semibold bg-transparent px-6 py-4 rounded-full border-2 border-[--color1]   hover:bg-[--color1] hover:text-white transition duration-500  focus:bg-[--color1] focus:text-white ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryButton;

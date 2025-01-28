import React from "react";

interface PrimeButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handelClick?: () => void;
  otherClasses?: string;
}

const PrimeButton = ({
  title,
  icon,
  position,
  handelClick,
  otherClasses,
}: PrimeButtonProps) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses} `}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default PrimeButton;

import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export default function Grid({ children, className = "" }: GridProps) {
  return (
    <div
      className={`grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
}

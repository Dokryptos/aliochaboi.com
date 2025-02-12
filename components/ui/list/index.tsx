import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export default function Grid({ children, className = "" }: GridProps) {
  return <div className={`flex  ${className}`}>{children}</div>;
}

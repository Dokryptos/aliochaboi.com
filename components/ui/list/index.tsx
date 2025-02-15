import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export default function Grid({ children, className = "" }: GridProps) {
  return <div className={`flex flex-wrap ${className}`}>{children}</div>;
}

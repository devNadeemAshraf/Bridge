import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

import { ChildrenProps } from "@/types";

type MainWrapperProps = ChildrenProps & {
  className?: ClassValue;
};

const MainWrapper = ({ children, className }: MainWrapperProps) => {
  return (
    <main className={cn(["w-full h-full max-w-[1280px] flex", className])}>
      {children}
    </main>
  );
};

export default MainWrapper;

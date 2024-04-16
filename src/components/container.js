import { twMerge } from "tailwind-merge";

export function ContainerGrid({ children, className }) {
  const defaultClass = "w-full max-w-grid mx-auto px-3 ";
  const conbinedClasses = twMerge(defaultClass, className);

  return <div className={conbinedClasses}>{children}</div>;
}

import { lazy, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={<div className="size-5" />}>
      <LucideIcon {...props} />
    </Suspense>
  );
}

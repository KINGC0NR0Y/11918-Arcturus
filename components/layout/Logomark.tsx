import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logomark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={96}
      height={96}
      quality={90}
      priority
      className={cn("rounded-full", className)}
    />
  );
}

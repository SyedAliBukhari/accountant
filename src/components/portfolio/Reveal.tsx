import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "reveal",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "reveal" | "img-reveal";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={cn(variant, visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-4">
      <span className="h-px w-10 bg-primary" aria-hidden />
      {children}
    </p>
  );
}

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled || open ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="display grid h-10 w-10 place-items-center border border-primary text-lg text-primary">
            {profile.monogram}
          </span>
          <span className="hidden text-sm tracking-wide text-foreground sm:block">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden border border-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground lg:inline-block"
        >
          Let's Connect
        </a>
        <button
          type="button"
          className="relative h-10 w-10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={cn("absolute left-2 right-2 h-px bg-foreground transition-all duration-300", open ? "top-1/2 rotate-45" : "top-[15px]")} />
          <span className={cn("absolute left-2 right-2 h-px bg-foreground transition-all duration-300", open ? "top-1/2 -rotate-45" : "top-[25px]")} />
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex h-[calc(100svh-5rem)] flex-col gap-2 px-6 pt-8">
          {nav.map((n, i) => (
            <li key={n.id} className="border-b border-border">
              <a href={`#${n.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="display flex items-baseline gap-4 py-4 text-4xl text-foreground">
                <span className="font-sans text-xs text-primary">0{i + 1}</span>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

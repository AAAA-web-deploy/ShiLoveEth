"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TelegramLogo, Ticker, XLogo } from "@/components/brand";
import { ExternalAction } from "@/components/external-action";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "visit", label: "Visit" },
  { id: "eth-club", label: "ETH Club" },
  { id: "how-to-buy", label: "How to Buy" },
] as const;

type SectionId = (typeof NAV)[number]["id"];

function useActiveSection() {
  const [active, setActive] = useState<SectionId>("visit");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const header = document.querySelector("header");
      const offset = (header?.getBoundingClientRect().height ?? 72) + 8;
      const line = window.scrollY + offset;
      let current: SectionId = "visit";
      for (const item of NAV) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = item.id;
      }
      setActive(current);
      setScrolled(window.scrollY > 8);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { active, scrolled };
}

function NavLinks({
  active,
  onNavigate,
  className,
}: {
  active: SectionId;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <nav className={className} aria-label="On this page">
      {NAV.map((item) => {
        const current = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-testid={`nav-${item.id}`}
            data-active={current ? "true" : "false"}
            aria-current={current ? "location" : undefined}
            onClick={onNavigate}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-extrabold transition-colors lg:py-1.5",
              current
                ? "bg-ink text-paper shadow-sm"
                : "text-ink/80 hover:bg-ink/6 hover:text-ink",
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <ExternalAction
        href={site.links.x}
        label="X"
        className="size-10 rounded-full border border-ink/15 bg-white/70 text-ink hover:bg-white"
      >
        <XLogo className="size-3.5" />
      </ExternalAction>
      <ExternalAction
        href={site.links.telegram}
        label="Telegram"
        className="h-10 rounded-full border border-ink/15 bg-white/70 px-3 text-sm font-extrabold text-ink hover:bg-white"
      >
        <TelegramLogo className="size-4" />
        Telegram
      </ExternalAction>
    </div>
  );
}

export function SiteHeader() {
  const { active, scrolled } = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-gold/55 bg-paper/92 backdrop-blur-md",
        scrolled && "shadow-[0_10px_30px_rgba(23,35,58,0.08)]",
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#visit" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/art/logo.webp"
            alt="Shiba Loves ETH mascot"
            width={768}
            height={768}
            priority
            className="size-11 shrink-0 rounded-full object-cover shadow-[0_6px_16px_rgba(23,35,58,0.18)] md:size-12"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-sans text-[0.95rem] font-extrabold tracking-tight text-ink sm:text-base">
              {site.name}
            </span>
            <Ticker className="block text-xs font-extrabold text-ink/75" />
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <NavLinks active={active} className="flex items-center gap-1" />
          <Socials className="ml-2" />
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="ml-auto size-10 rounded-full border-ink/15 bg-white/70 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-gold/40 bg-paper px-4 py-4 lg:hidden">
          <NavLinks
            active={active}
            onNavigate={() => setOpen(false)}
            className="flex flex-col items-stretch gap-1"
          />
          <Socials className="mt-3" />
        </div>
      ) : null}
    </header>
  );
}

import Image from "next/image";
import { Ticker } from "@/components/brand";
import { site } from "@/lib/site";

const LINKS = [
  { href: "#visit", label: "Visit" },
  { href: "#eth-club", label: "ETH Club" },
  { href: "#how-to-buy", label: "How to Buy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/40 bg-night text-[#f6efe4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/art/logo.webp"
            alt=""
            width={768}
            height={768}
            className="size-8 rounded-full object-cover"
          />
          <div>
            <p className="font-serif text-base leading-none font-semibold">{site.name}</p>
            <Ticker className="mt-0.5 block text-xs font-extrabold" />
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-extrabold">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white/80 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

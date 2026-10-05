import Image from "next/image";
import { Ticker } from "@/components/brand";
import { site, story } from "@/lib/site";

const LINKS = [
  { href: "#visit", label: "Visit" },
  { href: "#eth-club", label: "ETH Club" },
  { href: "#how-to-buy", label: "How to Buy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/40 bg-night text-[#f6efe4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/art/logo.webp"
            alt=""
            width={768}
            height={768}
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="font-serif text-lg leading-none font-semibold">{site.name}</p>
            <Ticker className="mt-1 block text-sm font-extrabold" />
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
      <p className="mx-auto max-w-6xl px-4 pb-8 text-sm leading-relaxed text-white/65 sm:px-6 lg:px-8">
        {story.parody}
      </p>
    </footer>
  );
}

import Image from "next/image";
import { TelegramLogo, Ticker, XLogo } from "@/components/brand";
import { ExternalAction } from "@/components/external-action";
import { site, story } from "@/lib/site";

export function EthClub() {
  return (
    <div className="relative bg-night">
      <Image
        src="/art/eth-club.webp"
        alt="At night on a coastal terrace, the Shiba holds a flag that reads I love ETH, with the Ethereum diamond glowing behind him."
        width={1672}
        height={941}
        sizes="100vw"
        className="h-auto w-full"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="night-panel px-5 py-10 sm:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:w-[min(48%,36rem)] lg:items-center lg:px-10 lg:py-8 xl:px-14">
        <div className="max-w-md">
          <h2 className="font-serif text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {story.ethTitle}
          </h2>
          <p className="mt-4 max-w-sm text-xl leading-snug font-semibold text-white/90 sm:text-2xl">
            {story.ethDeck}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ExternalAction
              href={site.links.telegram}
              label="Telegram"
              className="h-12 rounded-full bg-[#1d9bdb] px-5 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(29,155,219,0.35)] hover:bg-[#178cc6]"
            >
              <TelegramLogo className="size-5" />
              Telegram
            </ExternalAction>
            <ExternalAction
              href={site.links.x}
              label="X"
              className="h-12 rounded-full border border-white/25 bg-white/10 px-5 text-base font-extrabold text-white hover:bg-white/18"
            >
              <XLogo className="size-4" />
              X
            </ExternalAction>
          </div>
          <p className="mt-5 text-sm font-bold text-white/75">
            <Ticker className="text-white" heartClassName="text-[#ff5a5a]" />
            <span className="mx-2 text-white/40">·</span>
            {story.ethNote}
          </p>
        </div>
      </div>
    </div>
  );
}

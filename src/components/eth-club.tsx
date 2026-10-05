import Image from "next/image";
import { TelegramLogo, Ticker, XLogo } from "@/components/brand";
import { ExternalAction } from "@/components/external-action";
import { site, story } from "@/lib/site";

export function EthClub() {
  return (
    <div className="bg-paper">
      <div className="relative mx-auto w-[70vw]">
        <Image
          src="/art/eth-club.webp"
          alt="At night above a coastal town, the Shiba holds an I love ETH flag beneath a glowing Ethereum diamond. The sky reads Ethereum is home."
          width={1916}
          height={821}
          sizes="70vw"
          className="block h-auto w-full"
        />
        <div className="relative z-10 mx-auto flex w-max max-w-full flex-col items-center gap-3 px-2 pt-5 pb-8 xl:absolute xl:top-[34%] xl:left-[67%] xl:mx-0 xl:-translate-x-1/2 xl:pt-0 xl:pb-0">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ExternalAction
              href={site.links.telegram}
              label="Telegram"
              className="h-11 rounded-full bg-[#1d9bdb] px-5 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(8,16,32,0.35)] hover:bg-[#178cc6] xl:h-12"
            >
              <TelegramLogo className="size-5" />
              Telegram
            </ExternalAction>
            <ExternalAction
              href={site.links.x}
              label="X"
              className="h-11 rounded-full border border-white/70 bg-[#101a2e]/55 px-5 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(8,16,32,0.28)] hover:bg-[#101a2e]/75 xl:h-12"
            >
              <XLogo className="size-4" />
              X
            </ExternalAction>
          </div>
          <p className="text-center text-sm font-bold text-ink xl:text-white/90">
            <Ticker className="text-ink xl:text-white" heartClassName="text-[#ff5a5a]" />
            <span className="mx-2 text-ink/40 xl:text-white/45">·</span>
            {story.ethNote}
          </p>
        </div>
      </div>
    </div>
  );
}

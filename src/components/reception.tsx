import Image from "next/image";
import { story } from "@/lib/site";
import { TokenCard } from "@/components/token-card";

export function Reception() {
  return (
    <div className="story-paper">
      <div className="relative">
        <Image
          src="/art/reception.webp"
          alt="At the Solana visitor check-in, a receptionist asks the Shiba his name. He smiles, says he loves ETH, and hands over a card."
          width={1672}
          height={941}
          sizes="100vw"
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-[linear-gradient(180deg,rgba(247,241,230,0.96)_0%,rgba(247,241,230,0.82)_38%,transparent_100%)] px-4 pt-3 pb-8 sm:px-8 sm:pt-5 sm:pb-14 lg:px-12 lg:pt-7">
          <h2 className="max-w-[92%] font-serif text-[1.65rem] leading-[1.02] font-semibold tracking-tight text-balance text-ink sm:max-w-xl sm:text-5xl lg:max-w-[52%] lg:text-6xl">
            {story.receptionTitle}
          </h2>
        </div>
        <div className="relative z-10 -mt-24 mr-3 ml-auto w-[min(17rem,78%)] -rotate-[8deg] sm:absolute sm:top-1/2 sm:right-[5%] sm:mt-0 sm:mr-0 sm:w-[32%] sm:max-w-[22.5rem] sm:-translate-y-1/2 lg:right-[8%] lg:w-[28%]">
          <TokenCard />
        </div>
      </div>
    </div>
  );
}

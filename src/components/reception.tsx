import Image from "next/image";
import { story } from "@/lib/site";
import { TokenCard } from "@/components/token-card";

export function Reception() {
  return (
    <div className="story-paper pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
          {story.receptionTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed font-semibold text-balance text-ink/75 sm:text-lg">
          {story.receptionDeck}
        </p>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <Image
          src="/art/reception.webp"
          alt="At the Solana visitor check-in, a receptionist asks the Shiba his name. He smiles, says he loves ETH, and hands over a card."
          width={1672}
          height={941}
          sizes="100vw"
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="relative z-10 -mt-40 mr-3 ml-auto w-[min(17rem,78%)] -rotate-[8deg] sm:absolute sm:top-1/2 sm:right-[5%] sm:mt-0 sm:mr-0 sm:w-[32%] sm:max-w-[22.5rem] sm:-translate-y-1/2 lg:right-[8%] lg:w-[28%]">
          <TokenCard />
        </div>
      </div>
    </div>
  );
}

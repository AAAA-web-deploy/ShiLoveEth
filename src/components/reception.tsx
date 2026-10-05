import Image from "next/image";
import { story } from "@/lib/site";
import { TokenCard } from "@/components/token-card";

export function Reception() {
  return (
    <div className="story-paper px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
          {story.receptionTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed font-semibold text-ink/75 sm:text-lg">
          {story.receptionDeck}
        </p>

        <div className="mt-8 grid items-center gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
          <figure className="group min-w-0 overflow-hidden rounded-[1.6rem] shadow-[0_22px_50px_rgba(23,35,58,0.16)] ring-1 ring-ink/10">
            <Image
              src="/art/reception.webp"
              alt="At the Solana visitor check-in, a receptionist asks the Shiba his name. He smiles, says he loves ETH, and hands over a card."
              width={1672}
              height={941}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.025]"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <div className="flex min-w-0 justify-center lg:justify-end">
            <TokenCard />
          </div>
        </div>
      </div>
    </div>
  );
}

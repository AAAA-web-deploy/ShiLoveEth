import Image from "next/image";
import { Heart, Ticker } from "@/components/brand";
import { story } from "@/lib/site";

export function Hero() {
  return (
    <div className="bg-[#3f97cf] lg:bg-transparent">
      <div className="relative">
        <div className="relative z-10 px-5 pt-8 pb-7 sm:px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[min(46%,34rem)] lg:items-center lg:bg-gradient-to-r lg:from-[#10243f]/72 lg:via-[#10243f]/38 lg:to-transparent lg:px-10 lg:py-8 xl:px-16">
          <div className="max-w-md">
            <h1 className="poster-ink font-display text-[3.15rem] leading-[0.88] text-white sm:text-6xl lg:text-7xl">
              Shiba{" "}
              <Heart className="inline-block size-[0.68em] -translate-y-[0.04em] text-[#ff4b4b]" />
              <span className="mt-1 block">Loves ETH</span>
            </h1>
            <Ticker
              className="poster-ink mt-3 block font-display text-[1.65rem] text-white sm:text-3xl"
              heartClassName="text-[#ff4b4b]"
            />
            <p className="poster-ink mt-4 max-w-[16rem] font-sans text-lg font-extrabold leading-snug text-white sm:max-w-xs sm:text-xl">
              {story.heroMessageLead}
              <br />
              {story.heroMessageTail}
            </p>
          </div>
        </div>
        <Image
          src="/art/banner.webp"
          alt="A Shiba in sunglasses relaxes at the Sol Hotel pool, holding an Ethereum diamond while visiting Solana."
          width={2000}
          height={667}
          priority
          sizes="100vw"
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

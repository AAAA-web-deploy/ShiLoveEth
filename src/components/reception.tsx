import Image from "next/image";
import { TokenCard } from "@/components/token-card";

export function Reception() {
  return (
    <div className="bg-[#fdf6e4] xl:pb-10">
      <div className="relative mx-auto w-[70vw]">
        <Image
          src="/art/reception.webp"
          alt="At the Solana visitor check-in, a receptionist asks the Shiba his name. He answers that he loves ETH and holds out a card. The wall beside them is open for his business card."
          width={1942}
          height={809}
          sizes="70vw"
          className="block h-auto w-full"
        />
        <div className="relative z-10 mx-auto mt-5 w-full max-w-[20rem] pb-8 xl:absolute xl:top-[22%] xl:right-[11%] xl:mt-0 xl:w-[22%] xl:max-w-[17.5rem] xl:pb-0 xl:-rotate-[8deg]">
          <TokenCard />
        </div>
      </div>
    </div>
  );
}

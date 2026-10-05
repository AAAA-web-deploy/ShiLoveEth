import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-paper">
      <div className="mx-auto w-[70vw]">
        <Image
          src="/art/banner.webp"
          alt="Shiba Loves ETH. $SHB heart ETH. Visiting Solana. Representing Ethereum. A Shiba in sunglasses relaxes at the Sol Hotel pool, holding an Ethereum diamond."
          width={1774}
          height={887}
          priority
          sizes="70vw"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

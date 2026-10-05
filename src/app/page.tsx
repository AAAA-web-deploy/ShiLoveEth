import { EthClub } from "@/components/eth-club";
import { Hero } from "@/components/hero";
import { HowToBuy } from "@/components/how-to-buy";
import { Reception } from "@/components/reception";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="visit" className="scroll-anchor">
          <Hero />
          <Reception />
        </section>
        <section id="eth-club" className="scroll-anchor">
          <EthClub />
        </section>
        <section
          id="how-to-buy"
          className="scroll-anchor bg-[linear-gradient(180deg,#fff7ee_0%,#f8e3cc_48%,#f6d8c0_100%)]"
        >
          <HowToBuy />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

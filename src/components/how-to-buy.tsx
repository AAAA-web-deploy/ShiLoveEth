import Image from "next/image";
import { EthDiamond } from "@/components/brand";
import { ExternalAction } from "@/components/external-action";
import { isLiveUrl, site, story } from "@/lib/site";
import { cn } from "@/lib/utils";

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect x="4" y="8" width="24" height="17" rx="3.2" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M4 13.2h24" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="22.2" cy="18.6" r="1.7" fill="currentColor" />
    </svg>
  );
}

function ContractIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect x="4.5" y="3.5" width="16" height="20" rx="2.2" fill="none" stroke="currentColor" strokeWidth="2.3" />
      <path d="M8 9h9M8 13h9M8 17h5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20.6" cy="20.4" r="4.3" fill="#f08a34" stroke="currentColor" strokeWidth="2.3" />
      <path d="M23.8 23.6 27.4 27.2" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function SwapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        d="M6 12.2h15.2L16.4 7.4M26 19.8H10.8L15.6 24.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const buySteps = [
  { tone: "sun" as const, icon: "wallet" as const, lines: story.steps[0] },
  { tone: "violet" as const, icon: "diamond" as const, lines: story.steps[1] },
  { tone: "sun" as const, icon: "contract" as const, lines: story.steps[2] },
  { tone: "violet" as const, icon: "swap" as const, lines: story.steps[3] },
];

export function HowToBuy() {
  const swapLive = isLiveUrl(site.links.swap);
  const chartLive = isLiveUrl(site.links.chart);

  return (
    <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
          {story.crowdTitle}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed font-semibold text-balance text-ink/75 sm:text-lg">
          {story.crowdDeck}
        </p>

        <div className="mt-8 grid items-center gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
          <figure className="group min-w-0">
            <div className="overflow-hidden rounded-[1.6rem] shadow-[0_22px_50px_rgba(90,42,12,0.16)] ring-1 ring-ink/10">
              <Image
                src="/art/crowd.webp"
                alt="Fictional artwork of a cheering crowd and dogs with the Shiba outside the Sol Hotel at sunset."
                width={1448}
                height={1086}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="h-auto w-full motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.025]"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="mt-3 text-sm font-bold text-ink/60">
              {story.crowdCaption}
            </figcaption>
          </figure>

          <article className="mx-auto w-full min-w-0 max-w-[23.5rem] rounded-[1.15rem] border border-[#e4d0aa] bg-[#fff8ee] px-4 py-5 shadow-[0_16px_36px_rgba(90,42,12,0.12)] motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 sm:px-5 lg:mx-0 lg:justify-self-end">
            <h3 className="text-center font-sans text-[1.65rem] leading-none font-extrabold tracking-[0.12em] text-[#17233a] uppercase">
              {story.howToTitle}
            </h3>
            <div aria-hidden="true" className="mx-1 mt-3 h-[2px] rounded-full bg-[#e0c48a]" />
            <ol className="mt-1">
              {buySteps.map((step, index) => (
                <li
                  key={step.lines.join(" ")}
                  className={cn(
                    "flex items-center gap-2.5 py-3",
                    index < buySteps.length - 1 && "border-b border-[#ead9c2]",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white",
                      step.tone === "sun" ? "bg-[#f08a34]" : "bg-[#6d5ce0]",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center text-white",
                      step.icon === "diamond" && "size-12 text-[#6d5ce0]",
                      step.icon === "swap" && "rounded-full bg-[#6d5ce0]",
                      (step.icon === "wallet" || step.icon === "contract") && "rounded-[0.7rem] bg-[#f08a34]",
                    )}
                  >
                    {step.icon === "wallet" ? <WalletIcon className="size-8" /> : null}
                    {step.icon === "diamond" ? <EthDiamond id="buy-eth" className="size-12" /> : null}
                    {step.icon === "contract" ? <ContractIcon className="size-8" /> : null}
                    {step.icon === "swap" ? <SwapIcon className="size-7" /> : null}
                  </span>
                  <p className="min-w-0 text-[0.95rem] leading-[1.25] font-extrabold text-[#17233a]">
                    {step.lines[0]}
                    <br />
                    {step.lines[1]}
                  </p>
                </li>
              ))}
            </ol>

            {!swapLive || !chartLive ? (
              <p className="mt-3 text-center text-sm font-bold text-[#17233a]/75">{story.launchNote}</p>
            ) : null}

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <ExternalAction
                href={site.links.swap}
                label="Swap"
                className="h-12 w-full rounded-full border-transparent bg-[#6f5ae8] px-2 text-[0.95rem] font-extrabold text-white shadow-none hover:bg-[#624ed6]"
              >
                Swap
                <span aria-hidden="true">↗</span>
              </ExternalAction>
              <ExternalAction
                href={site.links.chart}
                label="View Chart"
                className="h-12 w-full rounded-full border-2 border-[#1c2b4a] bg-white px-2 text-[0.95rem] font-extrabold text-[#1c2b4a] shadow-none hover:bg-[#fff8ee]"
              >
                View Chart
                <span aria-hidden="true">↗</span>
              </ExternalAction>
            </div>

            <div className="mt-4 text-center">
              <ExternalAction
                href={site.links.howToBuy}
                label="Open How to Buy page"
                className="h-auto rounded-none bg-transparent px-0 text-[0.98rem] font-extrabold text-[#17233a] shadow-none hover:bg-transparent"
              >
                <span className="border-b-[3px] border-[#f08a34] pb-0.5">
                  Open How to Buy page
                  <span aria-hidden="true"> →</span>
                </span>
              </ExternalAction>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

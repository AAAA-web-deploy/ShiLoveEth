import Image from "next/image";
import { EthDiamond } from "@/components/brand";
import { ExternalAction } from "@/components/external-action";
import { site, story } from "@/lib/site";
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
  return (
    <div>
      <div className="relative mx-auto w-[70vw]">
        <Image
          src="/art/crowd.webp"
          alt="A cheering crowd and dogs with the Shiba at sunset by the sea, under the line Big hearts. Ethereum roots."
          width={1942}
          height={809}
          sizes="70vw"
          className="block h-auto w-full"
        />
        <div className="relative z-10 mx-auto mt-5 w-full max-w-[17rem] pb-8 xl:absolute xl:top-1/2 xl:right-[4%] xl:mt-0 xl:w-[22%] xl:max-w-[16.5rem] xl:-translate-y-1/2 xl:pb-0">
          <article className="@container flex aspect-[2/3.5] w-full min-w-0 flex-col rounded-[1.15rem] border border-[#e4d0aa] bg-[#fff8ee] px-3 py-3.5 shadow-[0_16px_36px_rgba(40,24,8,0.28)] @min-[280px]:px-4 @min-[280px]:py-4">
            <h3 className="text-center font-sans text-lg leading-none font-extrabold tracking-[0.12em] text-[#17233a] uppercase @min-[280px]:text-[1.45rem]">
              {story.howToTitle}
            </h3>
            <div aria-hidden="true" className="mx-1 mt-2.5 h-[2px] rounded-full bg-[#e0c48a]" />
            <ol className="mt-1 flex flex-1 flex-col justify-evenly">
              {buySteps.map((step, index) => (
                <li
                  key={step.lines.join(" ")}
                  className={cn(
                    "flex items-center gap-2 py-2",
                    index < buySteps.length - 1 && "border-b border-[#ead9c2]",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-7 shrink-0 place-items-center rounded-full text-xs font-extrabold text-white @min-[280px]:size-8 @min-[280px]:text-sm",
                      step.tone === "sun" ? "bg-[#f08a34]" : "bg-[#6d5ce0]",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center text-white @min-[280px]:size-10",
                      step.icon === "diamond" && "size-9 text-[#6d5ce0] @min-[280px]:size-11",
                      step.icon === "swap" && "rounded-full bg-[#6d5ce0]",
                      (step.icon === "wallet" || step.icon === "contract") &&
                        "rounded-[0.6rem] bg-[#f08a34]",
                    )}
                  >
                    {step.icon === "wallet" ? <WalletIcon className="size-5 @min-[280px]:size-7" /> : null}
                    {step.icon === "diamond" ? (
                      <EthDiamond id="buy-eth" className="size-9 @min-[280px]:size-11" />
                    ) : null}
                    {step.icon === "contract" ? (
                      <ContractIcon className="size-5 @min-[280px]:size-7" />
                    ) : null}
                    {step.icon === "swap" ? <SwapIcon className="size-5 @min-[280px]:size-6" /> : null}
                  </span>
                  <p className="min-w-0 text-[0.78rem] leading-[1.2] font-extrabold text-[#17233a] @min-[280px]:text-[0.9rem]">
                    {step.lines[0]}
                    <br />
                    {step.lines[1]}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <ExternalAction
                href={site.links.swap}
                label="Swap"
                className="h-10 w-full rounded-full border-transparent bg-[#6f5ae8] px-2 text-sm font-extrabold text-white shadow-none hover:bg-[#624ed6]"
              >
                Swap
                <span aria-hidden="true">↗</span>
              </ExternalAction>
              <ExternalAction
                href={site.links.chart}
                label="View Chart"
                className="h-10 w-full rounded-full border-2 border-[#1c2b4a] bg-white px-2 text-sm font-extrabold text-[#1c2b4a] shadow-none hover:bg-[#fff8ee]"
              >
                View Chart
                <span aria-hidden="true">↗</span>
              </ExternalAction>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

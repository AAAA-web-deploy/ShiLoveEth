import Image from "next/image";
import { Heart } from "@/components/brand";
import { ExternalAction } from "@/components/external-action";
import { isLiveUrl, site, story } from "@/lib/site";

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

          <article className="w-full min-w-0 rounded-[1.6rem] border border-gold bg-[#fffaf3] p-5 shadow-[0_18px_40px_rgba(90,42,12,0.12)] motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 sm:p-6 lg:max-w-md lg:justify-self-end">
            <div className="flex items-center gap-2">
              <Heart className="size-5 text-heart" />
              <h3 className="font-sans text-sm font-extrabold tracking-[0.18em] text-ink uppercase">
                {story.howToTitle}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed font-semibold text-ink/70">
              {story.howToIntro}
            </p>
            <ol className="mt-5 space-y-4">
              {story.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sun text-sm font-extrabold text-white shadow-[0_6px_14px_rgba(239,138,60,0.35)]">
                    {index + 1}
                  </span>
                  <p className="pt-1 font-bold text-ink">
                    {step}
                    {index === 2 ? (
                      <>
                        {" "}
                        <a
                          href="#business-card"
                          className="font-extrabold text-sea underline decoration-gold decoration-2 underline-offset-4 hover:text-ink"
                        >
                          See the card
                        </a>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ol>

            {!swapLive && !chartLive ? (
              <p className="mt-6 text-xs font-extrabold tracking-[0.14em] text-ink/50 uppercase">
                {story.launchNote}
              </p>
            ) : null}

            <div className="mt-3 flex flex-wrap gap-2">
              <ExternalAction
                href={site.links.swap}
                label="Swap"
                className="h-11 rounded-full bg-sun px-4 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(239,138,60,0.28)] hover:bg-[#e07c30]"
              >
                Swap
                <span aria-hidden="true">→</span>
              </ExternalAction>
              <ExternalAction
                href={site.links.chart}
                label="View Chart"
                className="h-11 rounded-full border border-ink/15 bg-white px-4 text-sm font-extrabold text-ink hover:bg-sand"
              >
                View Chart
                <span aria-hidden="true">→</span>
              </ExternalAction>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

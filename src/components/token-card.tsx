import { EthDiamond, Ticker } from "@/components/brand";
import { ContractRow } from "@/components/contract-row";
import { site, story } from "@/lib/site";

const claims = [site.claims.lpBurnt, site.claims.ownershipRenounced];
const pending = claims.some((claim) => !claim.verified);

const labelClass =
  "pt-1 text-[0.68rem] font-extrabold tracking-[0.14em] text-[#f4ead8] uppercase sm:text-xs";

export function TokenCard() {
  return (
    <article
      id="business-card"
      className="relative w-full min-w-0 max-w-md overflow-hidden rounded-[1.15rem] border-2 border-[#e6cb8c] bg-[#16325c] text-[#f7f1e6] shadow-[0_18px_40px_rgba(12,24,48,0.28)] motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent, transparent 13px, rgba(255,255,255,0.035) 13px, rgba(255,255,255,0.035) 14px)",
        }}
      />
      <div className="relative px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-center gap-3">
          <EthDiamond id="card-eth" className="size-14 shrink-0 sm:size-[4.6rem]" />
          <div className="min-w-0">
            <p className="font-sans text-[1.05rem] leading-none font-extrabold tracking-[0.035em] text-[#f6efe4] uppercase sm:text-[1.45rem]">
              {site.name}
            </p>
            <Ticker className="mt-1.5 block text-base leading-none font-extrabold tracking-wide text-[#f6efe4] sm:mt-2 sm:text-[1.35rem]" />
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-2 border-t border-[#e6cb8c] pt-3.5 sm:gap-x-6 sm:gap-y-2.5 sm:pt-4">
          <dt className={labelClass}>Network:</dt>
          <dd className="text-[0.95rem] font-bold text-white sm:text-base">{site.network}</dd>
          <dt className={labelClass}>Contract:</dt>
          <dd className="min-w-0">
            <ContractRow contract={site.contract} />
          </dd>
          <dt className={labelClass}>Supply:</dt>
          <dd className="text-[0.95rem] font-bold text-white tabular-nums sm:text-base">
            {site.supply}
          </dd>
        </dl>

        <div className="mt-3.5 space-y-0.5 border-t border-[#e6cb8c] pt-3.5 text-[1.02rem] leading-snug font-bold text-white sm:mt-4 sm:pt-4 sm:text-lg">
          {claims.map((claim) => (
            <p key={claim.label}>{claim.label}</p>
          ))}
        </div>

        {pending ? (
          <p className="mt-4 text-[0.78rem] leading-relaxed font-semibold text-white/55">
            {story.verificationNote}
          </p>
        ) : null}
      </div>
    </article>
  );
}

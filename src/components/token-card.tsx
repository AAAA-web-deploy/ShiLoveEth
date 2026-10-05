import { EthDiamond, Ticker } from "@/components/brand";
import { ContractRow } from "@/components/contract-row";
import { site } from "@/lib/site";

const claims = [site.claims.lpBurnt, site.claims.ownershipRenounced];

const labelClass =
  "pt-0.5 text-[0.62rem] font-extrabold tracking-[0.08em] text-[#f4ead8] uppercase @min-[280px]:text-xs";

export function TokenCard() {
  return (
    <article
      id="business-card"
      className="@container relative flex aspect-[3/4] w-full min-w-0 flex-col overflow-hidden rounded-[1.15rem] border-2 border-[#e6cb8c] bg-[#16325c] text-[#f7f1e6] shadow-[0_18px_36px_rgba(12,24,48,0.35)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent, transparent 13px, rgba(255,255,255,0.035) 13px, rgba(255,255,255,0.035) 14px)",
        }}
      />
      <div className="relative flex min-h-0 flex-1 flex-col px-3.5 py-3.5 @min-[280px]:px-5 @min-[280px]:py-5">
        <div className="flex items-center gap-2.5 @min-[280px]:gap-3">
          <EthDiamond
            id="card-eth"
            className="size-10 shrink-0 @min-[240px]:size-12 @min-[320px]:size-14"
          />
          <div className="min-w-0">
            <p className="font-sans text-[0.78rem] leading-none font-extrabold tracking-[0.03em] text-[#f6efe4] uppercase @min-[240px]:text-[0.95rem] @min-[320px]:text-[1.28rem]">
              {site.name}
            </p>
            <Ticker className="mt-1.5 block text-[0.78rem] leading-none font-extrabold tracking-wide text-[#f6efe4] @min-[240px]:text-sm @min-[320px]:mt-2 @min-[320px]:text-xl" />
          </div>
        </div>

        <dl className="mt-3 grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-1.5 border-t border-[#e6cb8c] pt-2.5 @min-[320px]:mt-4 @min-[320px]:gap-x-4 @min-[320px]:gap-y-2 @min-[320px]:pt-3">
          <dt className={labelClass}>Network:</dt>
          <dd className="text-[0.8rem] font-bold text-white @min-[320px]:text-base">{site.network}</dd>
          <dt className={labelClass}>Buy tax:</dt>
          <dd className="text-[0.8rem] font-bold text-white tabular-nums @min-[320px]:text-base">{site.buyTax}</dd>
          <dt className={labelClass}>Sell tax:</dt>
          <dd className="text-[0.8rem] font-bold text-white tabular-nums @min-[320px]:text-base">{site.sellTax}</dd>
          <dt className={labelClass}>Supply:</dt>
          <dd className="text-[0.8rem] font-bold text-white tabular-nums @min-[320px]:text-base">
            {site.supply}
          </dd>
        </dl>

        <div className="mt-2 min-w-0 border-t border-[#e6cb8c]/70 pt-2">
          <ContractRow contract={site.contract} />
        </div>

        <div className="mt-auto space-y-0 border-t border-[#e6cb8c] pt-2 text-[0.82rem] leading-tight font-bold text-white @min-[320px]:pt-2.5 @min-[320px]:text-sm">
          {claims.map((claim) => (
            <p key={claim.label}>{claim.label}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

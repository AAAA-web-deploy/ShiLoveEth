import { EthDiamond, Ticker } from "@/components/brand";
import { ContractRow } from "@/components/contract-row";
import { site, story } from "@/lib/site";

const claims = [site.claims.lpBurnt, site.claims.ownershipRenounced];
const pending = claims.some((claim) => !claim.verified);

export function TokenCard() {
  return (
    <article
      id="business-card"
      className="token-card relative w-full min-w-0 max-w-md overflow-hidden rounded-[1.6rem] border border-gold/90 bg-[linear-gradient(165deg,#21487a_0%,#16345c_52%,#10243f_100%)] p-5 text-paper shadow-[0_22px_50px_rgba(16,28,48,0.22)] motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_28px_60px_rgba(16,28,48,0.28)] sm:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-6 size-32 rounded-full bg-white/8 blur-2xl"
      />
      <div className="relative flex items-center gap-4">
        <EthDiamond className="size-14 shrink-0 drop-shadow-[0_8px_16px_rgba(20,10,50,0.35)]" />
        <div className="min-w-0">
          <p className="font-serif text-2xl leading-none font-semibold tracking-tight">
            {site.name}
          </p>
          <Ticker className="mt-2 block text-sm font-extrabold" />
        </div>
      </div>

      <dl className="relative mt-5 space-y-3.5 border-t border-white/12 pt-4">
        <div className="grid grid-cols-[5.4rem_minmax(0,1fr)] items-baseline gap-3">
          <dt className="text-[0.68rem] font-extrabold tracking-[0.16em] text-gold uppercase">
            Network
          </dt>
          <dd className="font-bold">{site.network}</dd>
        </div>
        <ContractRow contract={site.contract} />
        <div className="grid grid-cols-[5.4rem_minmax(0,1fr)] items-baseline gap-3">
          <dt className="text-[0.68rem] font-extrabold tracking-[0.16em] text-gold uppercase">
            Supply
          </dt>
          <dd className="font-bold tabular-nums">{site.supply}</dd>
        </div>
      </dl>

      <ul className="relative mt-4 space-y-2.5 border-t border-white/12 pt-4">
        {claims.map((claim) => (
          <li key={claim.label} className="flex items-center justify-between gap-3">
            <span className="font-bold">{claim.label}</span>
            {claim.verified ? (
              <span className="text-xs font-bold tracking-wide text-[#b7f0c8] uppercase">
                Noted
              </span>
            ) : (
              <span className="shrink-0 rounded-full border border-gold/45 px-2 py-0.5 text-[0.62rem] font-extrabold tracking-wide text-gold uppercase">
                Pending verification
              </span>
            )}
          </li>
        ))}
      </ul>

      {pending ? (
        <p className="relative mt-4 text-xs leading-relaxed text-white/65">
          {story.verificationNote}
        </p>
      ) : null}
    </article>
  );
}

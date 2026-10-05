"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { isContractAvailable } from "@/lib/site";

function OverlapSquares({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect
        x="2.2"
        y="8"
        width="13"
        height="13"
        rx="2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
      />
      <rect
        x="8.8"
        y="3"
        width="13"
        height="13"
        rx="2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
      />
    </svg>
  );
}

export function ContractRow({ contract }: { contract: string }) {
  const ready = isContractAvailable(contract);
  const [note, setNote] = useState<"copied" | "failed" | "">("");

  useEffect(() => {
    if (!note) return;
    const timeout = window.setTimeout(() => setNote(""), 1600);
    return () => window.clearTimeout(timeout);
  }, [note]);

  async function copyAddress() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(contract);
      setNote("copied");
    } catch {
      setNote("failed");
    }
  }

  return (
    <div className="flex w-full min-w-0 items-start gap-1">
      <p
        data-testid="contract-address"
        className="min-w-0 flex-1 pt-0.5 text-[0.8rem] leading-snug font-bold break-all text-white [overflow-wrap:anywhere] @min-[320px]:text-base"
      >
        {contract}
        <span role="status" aria-live="polite" className="sr-only">
          {note === "copied" ? "Copied" : note === "failed" ? "Couldn’t copy" : ""}
        </span>
      </p>
      <button
        type="button"
        data-testid="copy-contract"
        data-copy-ready={ready ? "true" : "false"}
        disabled={!ready}
        aria-label={
          note === "copied"
            ? "Copied"
            : ready
              ? "Copy contract address"
              : "Contract address not available yet"
        }
        title={
          note === "copied"
            ? "Copied"
            : ready
              ? "Copy contract address"
              : "Copy stays off until a real address replaces Coming soon"
        }
        onClick={copyAddress}
        className="-mt-0.5 grid size-8 shrink-0 place-items-center rounded-md text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-100"
      >
        {note === "copied" ? (
          <Check className="size-5 text-[#b7f0c8]" />
        ) : note === "failed" ? (
          <span className="text-[0.65rem] font-extrabold text-[#ffd0c8]">!</span>
        ) : (
          <OverlapSquares className="size-6" />
        )}
      </button>
    </div>
  );
}

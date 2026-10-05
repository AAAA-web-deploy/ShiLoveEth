"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { isContractAvailable } from "@/lib/site";

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
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[0.68rem] font-extrabold tracking-[0.16em] text-gold uppercase">
          Contract
          <span role="status" aria-live="polite" className="tracking-normal normal-case">
            {note === "copied" ? (
              <span className="text-[#b7f0c8]">Copied</span>
            ) : note === "failed" ? (
              <span className="text-[#ffd0c8]">Couldn’t copy</span>
            ) : null}
          </span>
        </p>
        <p
          data-testid="contract-address"
          className="mt-1 font-mono text-[0.8125rem] leading-relaxed break-all text-white [overflow-wrap:anywhere]"
        >
          {contract}
        </p>
      </div>
      <Button
        type="button"
        size="icon"
        variant="outline"
        data-testid="copy-contract"
        data-copy-ready={ready ? "true" : "false"}
        disabled={!ready}
        aria-label={
          ready ? "Copy contract address" : "Contract address not available yet"
        }
        title={
          ready
            ? "Copy contract address"
            : "Copy stays off until a real address replaces Coming soon"
        }
        onClick={copyAddress}
        className="mt-0.5 size-10 rounded-xl border-gold/50 bg-white/8 text-gold hover:bg-white/15 hover:text-white disabled:border-white/15 disabled:bg-transparent disabled:text-white/35"
      >
        {note === "copied" ? (
          <Check className="size-4" />
        ) : (
          <Copy className="size-4" />
        )}
      </Button>
    </div>
  );
}

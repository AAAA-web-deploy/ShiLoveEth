"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

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

function copyWithSelection(value: string) {
  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  const copied = document.execCommand("copy");
  area.remove();
  if (!copied) throw new Error("copy failed");
}

async function copyContractText(value: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }
  } catch {
    // Clipboard can reject outside a secure context. The selection fallback still copies.
  }
  copyWithSelection(value);
}

export function ContractRow({ contract }: { contract: string }) {
  const value = contract.trim();
  const ready = value.length > 0;
  const [note, setNote] = useState<"copied" | "failed" | "">("");

  useEffect(() => {
    if (!note) return;
    const timeout = window.setTimeout(() => setNote(""), 1600);
    return () => window.clearTimeout(timeout);
  }, [note]);

  async function copyAddress() {
    if (!ready) return;
    try {
      await copyContractText(value);
      setNote("copied");
    } catch {
      setNote("failed");
    }
  }

  return (
    <div className="flex w-full min-w-0 items-start gap-2">
      <div className="min-w-0 flex-1">
        <p className="text-[0.62rem] font-extrabold tracking-[0.08em] text-[#f4ead8] uppercase @min-[280px]:text-xs">
          Contract:
        </p>
        <p
          data-testid="contract-address"
          className="mt-1 min-h-[2.35em] font-mono text-[0.68rem] leading-[1.35] font-bold tracking-tight text-white [overflow-wrap:anywhere] @min-[260px]:text-[0.74rem]"
        >
          {contract}
          <span role="status" aria-live="polite" className="sr-only">
            {note === "copied" ? "Copied" : note === "failed" ? "Couldn’t copy" : ""}
          </span>
        </p>
      </div>
      <button
        type="button"
        data-testid="copy-contract"
        data-copy-ready={ready ? "true" : "false"}
        disabled={!ready}
        aria-label={note === "copied" ? "Copied" : note === "failed" ? "Couldn’t copy" : "Copy contract address"}
        title={note === "copied" ? "Copied" : "Copy contract address"}
        onClick={copyAddress}
        className="mt-5 grid size-8 shrink-0 place-items-center rounded-md text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-100"
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

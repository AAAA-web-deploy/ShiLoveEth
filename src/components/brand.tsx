import { cn } from "@/lib/utils";

export function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 20.6s-6.55-4.2-9.15-7.85C.86 9.95 1.35 6.4 4.15 4.95c2.12-1.1 4.28-.55 5.55 1.05L12 8.55l2.3-2.55c1.27-1.6 3.43-2.15 5.55-1.05 2.8 1.45 3.29 5 1.3 7.8C18.55 16.4 12 20.6 12 20.6z"
      />
    </svg>
  );
}

export function Ticker({
  className,
  heartClassName,
}: {
  className?: string;
  heartClassName?: string;
}) {
  return (
    <span className={className} aria-label="$SHB heart ETH">
      <span aria-hidden="true">
        $SHB
        <Heart
          className={cn(
            "mx-[0.06em] inline-block size-[0.82em] -translate-y-[0.08em] text-heart",
            heartClassName,
          )}
        />
        ETH
      </span>
    </span>
  );
}

export function EthDiamond({
  className,
  id = "eth",
}: {
  className?: string;
  id?: string;
}) {
  const face = `${id}-face`;
  const base = `${id}-base`;
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={face} x1="12" y1="2" x2="52" y2="46">
          <stop offset="0" stopColor="#efe7ff" />
          <stop offset="0.45" stopColor="#8d6bff" />
          <stop offset="1" stopColor="#4a2f9b" />
        </linearGradient>
        <linearGradient id={base} x1="14" y1="36" x2="50" y2="62">
          <stop offset="0" stopColor="#6d4fe0" />
          <stop offset="1" stopColor="#2c1b66" />
        </linearGradient>
      </defs>
      <path fill={`url(#${face})`} d="M32 2 54 32.2 32 43.4 10 32.2 32 2z" />
      <path fill={`url(#${base})`} d="M32 47.2 54 35.6 32 62 10 35.6 32 47.2z" />
      <path fill="#fff" fillOpacity="0.38" d="M32 2 43.2 32.2 32 43.4 32 2z" />
      <path fill="#1b103f" fillOpacity="0.18" d="M32 47.2 43.2 35.8 32 58.5 32 47.2z" />
    </svg>
  );
}

export function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M14.6 10.4 21.8 2h-1.7l-6.3 7.3L8.7 2H2.2l7.6 11.1L2.2 22h1.7l6.7-7.7L15.1 22h6.5l-7-11.6Zm-2.4 2.7-.8-1.1-6.2-8.8h2.7l5 7.1.8 1.1 6.5 9.3h-2.7l-5.3-7.6Z"
      />
    </svg>
  );
}

export function TelegramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M21.6 3.4 2.8 10.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.9 5.8c.2.7.1.9.8.9.4 0 .6-.2.9-.5l2.6-2.5 5.4 4c1 .6 1.7.3 1.9-.9l3.5-16.4c.4-1.4-.5-2-1.8-1.6ZM8.8 13.7l9.3-5.7c.4-.3.8 0 .5.4l-7.6 6.9-.3 3.3-1.9-4.9Z"
      />
    </svg>
  );
}

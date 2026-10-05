"use client";

import { Button } from "@/components/ui/button";
import { isLiveUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type ExternalActionProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  label: string;
};

export function ExternalAction({
  href,
  className,
  children,
  label,
}: ExternalActionProps) {
  const live = isLiveUrl(href);
  const unavailable = `${label} opens once a URL is supplied`;

  if (!live) {
    return (
      <Button
        type="button"
        aria-disabled="true"
        title={unavailable}
        className={cn(className, "cursor-not-allowed opacity-50")}
        onClick={(event) => event.preventDefault()}
      >
        {children}
        <span className="sr-only">, link not supplied yet</span>
      </Button>
    );
  }

  return (
    <Button
      nativeButton={false}
      className={className}
      render={
        <a
          href={href.trim()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        />
      }
    >
      {children}
    </Button>
  );
}

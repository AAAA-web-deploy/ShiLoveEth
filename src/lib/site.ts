/**
 * Editable project details for Shiba Loves ETH.
 *
 * Replace `contract` with the deployed address to enable copy. The control
 * copies that string exactly, including any wrapping on screen.
 * Set a claim's `verified` flag only when there is something to support it.
 * `buyTax` and `sellTax` are the figures shown on the business card.
 */

export const CONTRACT_PLACEHOLDER = "Coming soon…";

export const site = {
  name: "Shiba Loves ETH",
  ticker: "$SHB❤️ETH",
  network: "Ethereum",
  contract: CONTRACT_PLACEHOLDER,
  supply: "1,000,000,000",
  buyTax: "0%",
  sellTax: "0%",
  claims: {
    lpBurnt: { label: "LP burnt", verified: false },
    ownershipRenounced: { label: "Ownership renounced", verified: false },
  },
  links: {
    x: "https://x.com/",
    telegram: "https://t.me/",
    swap: "https://www.dextools.io/",
    chart: "https://dexscreener.com/",
  },
} as const;

export const story = {
  // These lines are already drawn into the scene artwork, so the page does not print them again.
  heroMessageLead: "Visiting Solana.",
  heroMessageTail: "Representing Ethereum.",
  receptionTitle: "A name. A passion. A business card.",
  ethTitle: "Ethereum is home.",
  ethDeck: "A guest in Solana. An ETH fan everywhere.",
  ethNote: "Independent Ethereum meme",
  crowdTitle: "Big hearts. Ethereum roots.",
  howToTitle: "How to buy",
  steps: [
    ["Set up an", "Ethereum wallet."],
    ["Add ETH.", "Keep some for gas."],
    ["Verify the token", "contract."],
    ["Review your swap", "and confirm."],
  ],
} as const;

export function isLiveUrl(value: string) {
  return /^https?:\/\/\S+$/i.test(value.trim());
}

export function isContractAvailable(value: string) {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return false;
  return trimmed !== "coming soon…" && trimmed !== "coming soon...";
}

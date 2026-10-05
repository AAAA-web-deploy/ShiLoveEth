/**
 * Editable project details for Shiba Loves ETH.
 *
 * Leave a link as an empty string until the real URL exists — the control
 * stays inactive. Replace `contract` with the deployed address to enable
 * copy. Set a claim's `verified` flag only when there is something to support it.
 *
 * The copy control copies `contract` exactly, including any wrapping on screen.
 */

export const CONTRACT_PLACEHOLDER = "Coming soon…";

export const site = {
  name: "Shiba Loves ETH",
  ticker: "$SHB❤️ETH",
  network: "Ethereum",
  contract: CONTRACT_PLACEHOLDER,
  supply: "1,000,000,000",
  claims: {
    lpBurnt: { label: "LP burnt", verified: false },
    ownershipRenounced: { label: "Ownership renounced", verified: false },
  },
  links: {
    x: "",
    telegram: "",
    swap: "",
    chart: "",
    howToBuy: "",
  },
} as const;

export const story = {
  heroMessageLead: "Visiting Solana.",
  heroMessageTail: "Representing Ethereum.",
  receptionTitle: "A name. A passion. A business card.",
  receptionDeck:
    "At the Solana visitor desk, the Shiba hands over one answer: he loves ETH.",
  ethTitle: "Ethereum is home.",
  ethDeck: "A guest in Solana. An ETH fan everywhere.",
  ethNote: "Independent Ethereum meme",
  crowdTitle: "Big hearts. Ethereum roots.",
  crowdDeck:
    "The crowd is fictional artwork. The guide beside it is the practical part.",
  crowdCaption: "Fictional community artwork.",
  howToTitle: "How to buy",
  steps: [
    ["Set up an", "Ethereum wallet."],
    ["2. Add ETH.", "Keep some for gas."],
    ["3. Verify the token", "contract."],
    ["4. Review your swap", "and confirm."],
  ],
  launchNote: "Available after launch",
  verificationNote: "Preview claims — verification required",
  parody:
    "Independent parody. Unaffiliated with SHIB, Ethereum, Solana, or Sunrise.",
} as const;

export function isLiveUrl(value: string) {
  return /^https?:\/\/\S+$/i.test(value.trim());
}

export function isContractAvailable(value: string) {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return false;
  return trimmed !== "coming soon…" && trimmed !== "coming soon...";
}

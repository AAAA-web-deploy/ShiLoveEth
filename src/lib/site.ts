/**
 * Editable project details for Shiba Loves ETH.
 *
 * The copy control copies `contract` exactly, including any wrapping on screen.
 * Set a claim's `verified` flag only when there is something to support it.
 * `buyTax` and `sellTax` are the figures shown on the business card.
 */

export const CONTRACT_PLACEHOLDER = "0x8190500d48a032fc7b5abc13c38ed293b2520260";

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
    x: "https://x.com/shibalove_eth",
    telegram: "https://t.me/shibaloveeth",
    swap: "https://www.dextools.io/app/ether/pair-explorer/0x8190500d48a032fc7b5abc13c38ed293b2520260",
    chart: "https://dexscreener.com/ethereum/0x8190500d48a032fc7b5abc13c38ed293b2520260",
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

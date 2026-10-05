# Shiba Loves ETH

A single scrolling page for **Shiba Loves ETH** (`$SHB❤️ETH`). The Shiba is visiting Solana and still answers to Ethereum. Each scene is illustrated artwork at 70% of the screen width, and the scene titles are drawn into that artwork. The token card, navigation, and the buying guide are editable page content.

## Run the preview

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## What you can edit

All live details live in [`src/lib/site.ts`](src/lib/site.ts).

| Field | While it is empty or placeholder |
| --- | --- |
| `contract` | Shows “Coming soon…”. The copy control stays inactive. |
| `links.x` and `links.telegram` | Header and ETH Club buttons do not open anything. |
| `links.swap` and `links.chart` | Swap and View Chart stay inactive. |
| `claims.*.verified` | LP burnt and ownership renounced stay on the card either way. |

Paste a real `https://` URL to turn a link on. Replace `contract` with the deployed address to turn copy on. The control copies that string exactly, even when the address wraps onto more than one line.

Supply stays `1,000,000,000` and the network stays Ethereum until you change them yourself. Do not treat the LP or ownership lines as confirmed until `verified` is set from something you can stand behind.

Artwork used on the page is in `public/art/`.

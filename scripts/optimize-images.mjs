// Regenerates the web-sized .webp assets that the app imports.
//
// The original photos are 4032x3024 to 5712x4284 but are only ever displayed
// in a ~185px box (the stack) or a ~360px card, so shipping the originals meant
// downloading and decoding ~180 megapixels on every page load.
//
// Sources in src/assets are never modified; every output is written to
// src/assets/optimized/, so this script is safe to re-run any number of times
// without re-encoding its own lossy output.
//
// Run with: npm run optimize:images

import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const OUT_ROOT = 'src/assets/optimized'

const jobs = [
  {
    label: 'landscapes',
    from: 'src/assets/landscapes',
    to: `${OUT_ROOT}/landscapes`,
    // Rendered in clamp(160px, 15vw, 185px) at aspect-ratio 1 with
    // object-fit: cover, so a centred 440px square covers 2x DPR with headroom.
    width: 440,
    height: 440,
    quality: 78,
  },
  {
    label: 'project images',
    from: 'src/assets',
    to: OUT_ROOT,
    only: ['portfolio.png', 'guesspkmn.png', 'codepiece.png', 'cardiomedical.webp'],
    // Project cards are ~360px wide at the 800px container cap; 800px covers 2x.
    // No height: keep the source aspect ratio so object-fit crops as it does now.
    width: 800,
    height: null,
    quality: 80,
  },
]

const kb = (n) => `${(n / 1024).toFixed(0)} KB`

async function optimize({ label, from, to, only, width, height, quality }) {
  const srcDir = join(root, from)
  const outDir = join(root, to)
  await mkdir(outDir, { recursive: true })

  const sources = (await readdir(srcDir))
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .filter((f) => !only || only.includes(f))
    .sort()

  let before = 0
  let after = 0

  console.log(`${label}:`)
  for (const file of sources) {
    // Read the bytes ourselves so sharp never holds a handle on a path we may
    // be about to write (a .webp source encodes back to the same filename).
    const input = readFileSync(join(srcDir, file))

    const encoded = await sharp(input)
      .resize(width, height, {
        fit: height ? 'cover' : 'inside',
        position: 'centre',
        withoutEnlargement: true,
      })
      .webp({ quality, effort: 6 })
      .toBuffer()

    writeFileSync(join(outDir, `${parse(file).name}.webp`), encoded)

    before += input.length
    after += encoded.length
    console.log(`  ${file.padEnd(24)} ${kb(input.length).padStart(9)} -> ${kb(encoded.length).padStart(8)}`)
  }

  return { before, after }
}

let before = 0
let after = 0
for (const job of jobs) {
  const result = await optimize(job)
  before += result.before
  after += result.after
}

console.log(`\ntotal ${kb(before)} -> ${kb(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`)

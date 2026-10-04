#!/usr/bin/env bash
# Render the reference PDF and the current deck (English) side by side into Sources/compare:
#   NN-ref.png (from Sources/Alla-pres-v9.pdf, slide 10 from a photo mock-up) and NN-new.png (from the deck),
#   both 2400px wide.
# Usage: npm run compare [-- <range>]   e.g. npm run compare -- 2-4   (default: all slides)
set -euo pipefail
cd "$(dirname "$0")/.."

REF=Sources/Alla-pres-v9.pdf
PHOTO10=Sources/photo_2026-10-04_20-58-01.jpg
OUT=Sources/compare
RANGE=${1:-}
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT"

# Reference, numbered by deck slide: PDF pages 1-9 -> slides 1-9, PDF page 10 -> slide 11 (contacts);
# slide 10 (references) has no PDF page, its reference is a photo mock-up. Needs pymupdf and pillow via uv.
uv run --quiet --with pymupdf --with pillow python - "$REF" "$PHOTO10" "$OUT" "$RANGE" <<'PY'
import sys, pymupdf
from PIL import Image
ref, photo10, out, rng = sys.argv[1:]
doc = pymupdf.open(ref)
slides = range(1, 12)
if rng:
    a, _, b = rng.partition('-')
    slides = range(int(a), int(b or a) + 1)
for n in slides:
    if n == 10:
        im = Image.open(photo10).convert('RGB')
        im.resize((2400, round(2400 * im.height / im.width)), Image.LANCZOS).save(f'{out}/10-ref.png')
    elif n <= 11:
        page = n if n < 10 else 10
        doc[page - 1].get_pixmap(dpi=150).save(f'{out}/{n:02d}-ref.png')  # 1152pt * 150/72 = 2400px
PY

# Deck: canvas is 980px wide, so scale 2400/980 gives the same size as the reference
npx slidev export --format png --scale 2.449 --output "$TMP" ${RANGE:+--range "$RANGE"} >/dev/null
for f in "$TMP"/*.png; do
  n=$(basename "$f" .png); n=$((10#$n))
  mv "$f" "$(printf '%s/%02d-new.png' "$OUT" "$n")"
done

echo "Pairs written to $OUT"

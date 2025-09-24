"""Split a PDF into multiple chapter files based on page ranges.

Usage:
    python split_pdf.py --input cours.pdf --ranges "1-24:chapitre-01" "25-40:chapitre-02"

Each range is expressed as START-END:TITLE (inclusive, 1-indexed).
Outputs are written to the "output" directory by default.
"""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable, Tuple

try:
    from pypdf import PdfReader, PdfWriter
except ImportError as exc:  # pragma: no cover - optional dependency
    raise SystemExit(
        "Le module 'pypdf' est requis. Installez-le avec 'pip install pypdf'."
    ) from exc


def parse_range(spec: str) -> Tuple[int, int, str]:
    try:
        pages, title = spec.split(":", 1)
    except ValueError as exc:
        raise ValueError(
            f"Format invalide pour '{spec}'. Utilisez START-END:TITRE"
        ) from exc

    if "-" not in pages:
        start = end = int(pages)
    else:
        start_s, end_s = pages.split("-", 1)
        start = int(start_s)
        end = int(end_s)

    if start < 1 or end < start:
        raise ValueError(f"Bornes invalides pour '{spec}'")

    return start, end, title.strip()


def split_pdf(input_path: Path, ranges: Iterable[str], output_dir: Path, overwrite: bool) -> None:
    reader = PdfReader(str(input_path))
    total_pages = len(reader.pages)
    output_dir.mkdir(parents=True, exist_ok=True)

    for spec in ranges:
        start, end, title = parse_range(spec)
        if end > total_pages:
            raise ValueError(
                f"La plage {start}-{end} dépasse le nombre total de pages ({total_pages})."
            )

        writer = PdfWriter()
        for page_index in range(start - 1, end):
            writer.add_page(reader.pages[page_index])

        filename = f"{title}.pdf"
        dest = output_dir / filename
        if dest.exists() and not overwrite:
            raise FileExistsError(
                f"Le fichier {dest} existe déjà. Ajoutez --overwrite pour le remplacer."
            )

        with dest.open("wb") as fh:
            writer.write(fh)

        print(f"✔ Créé {dest} ({end - start + 1} page(s))")


def main() -> None:
    parser = argparse.ArgumentParser(description="Découpe un PDF en chapitres.")
    parser.add_argument("--input", required=True, help="PDF source à découper")
    parser.add_argument(
        "--ranges",
        nargs="+",
        required=True,
        help="Plages de pages START-END:TITRE (1-indexées)",
    )
    parser.add_argument(
        "--output-dir",
        default="output",
        help="Dossier de sortie (par défaut: ./output)",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Remplace les fichiers existants",
    )

    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        raise SystemExit(f"Le fichier {input_path} est introuvable.")

    output_dir = Path(args.output_dir)

    split_pdf(input_path, args.ranges, output_dir, args.overwrite)


if __name__ == "__main__":
    main()

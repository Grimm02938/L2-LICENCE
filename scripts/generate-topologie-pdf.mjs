import { mkdirSync, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '..', 'notes');
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, 'topologie-suites.pdf');

const doc = new PDFDocument({ size: 'A4', margin: 56 });
const stream = createWriteStream(outputPath);
doc.pipe(stream);

doc.registerFont('Regular', 'Helvetica');
doc.registerFont('Bold', 'Helvetica-Bold');

doc.fillColor('#0b7285').font('Bold').fontSize(24).text('Suites et topologie de ℝ', { align: 'center' });
doc.moveDown(0.6);
doc.fillColor('#495057').font('Regular').fontSize(12).text('Résumé coloré des définitions, propositions et théorèmes clés sur les suites réelles et la topologie de ℝ.');
doc.moveDown(1.2);

const sections = [
  {
    heading: '2.2 Suites',
    accent: '#0b7285',
    items: [
      {
        type: 'definition',
        title: 'Suite réelle',
        body: "Une suite réelle est une application u : ℕ → ℝ, notée (uₙ)ₙ≥0."
      },
      {
        type: 'definition',
        title: 'Convergence',
        body: 'La suite (uₙ) converge vers ℓ si pour tout ε > 0, il existe N ∈ ℕ tel que n ≥ N ⇒ |uₙ − ℓ| < ε. La limite est unique.'
      },
      {
        type: 'proposition',
        title: 'Caractérisation séquentielle',
        body: 'La suite (uₙ) converge vers ℓ si et seulement si (uₙ) est de Cauchy : pour tout ε > 0, il existe N tel que p, q ≥ N ⇒ |u_p − u_q| < ε.'
      },
      {
        type: 'definition',
        title: 'Suite de Cauchy',
        body: 'La suite (uₙ) est de Cauchy si |u_p − u_q| < ε pour p, q suffisamment grands. Dans ℝ, toute suite de Cauchy converge.'
      },
      {
        type: 'definition',
        title: 'Suite extraite',
        body: "Si (n_k) est strictement croissante, la suite (u_{n_k}) est une suite extraite."
      },
      {
        type: 'definition',
        title: "Valeurs d'adhérence",
        body: "Un réel ℓ est valeur d'adhérence de (uₙ) si, pour tout r > 0, l'ensemble { n | |uₙ − ℓ| < r } est infini. L'ensemble est noté Val(uₙ)."
      },
      {
        type: 'lemme',
        title: 'Extraction et adhérence',
        body: 'Toute valeur d\'adhérence est limite d\'une suite extraite convergente, et réciproquement.'
      },
      {
        type: 'theoreme',
        title: 'Bolzano–Weierstrass',
        body: 'Toute suite réelle bornée admet au moins une valeur d\'adhérence, i.e. possède une sous-suite convergente.'
      },
      {
        type: 'lemme',
        title: 'Localisation des valeurs d\'adhérence',
        body: 'Si ℓ est valeur d\'adhérence, alors pour tout r > 0 et tout N, il existe n ≥ N tel que |uₙ − ℓ| < r.'
      }
    ]
  },
  {
    heading: '2.3 Topologie de ℝ',
    accent: '#c03221',
    items: [
      {
        type: 'definition',
        title: 'Voisinage',
        body: 'Pour x ∈ ℝ, un voisinage de x est un intervalle ouvert (x − r, x + r) avec r > 0.'
      },
      {
        type: 'definition',
        title: 'Ouverts et fermés',
        body: 'Une partie O ⊂ ℝ est ouverte si chaque point possède un voisinage contenu dans O. Un ensemble F est fermé si son complément est ouvert.'
      },
      {
        type: 'proposition',
        title: 'Stabilité des ouverts et fermés',
        body: 'Les ouverts sont stables par réunion quelconque et intersection finie. Les fermés sont stables par intersection quelconque et réunion finie.'
      },
      {
        type: 'proposition',
        title: 'Caractérisation séquentielle des fermés',
        body: 'Un ensemble F est fermé si et seulement si toute suite (xₙ) de F qui converge dans ℝ a sa limite dans F.'
      },
      {
        type: 'proposition',
        title: 'Caractérisation séquentielle des ouverts',
        body: 'Un ensemble O est ouvert si toute suite (xₙ) convergeant vers un point de O est finalement dans O.'
      },
      {
        type: 'definition',
        title: 'Continuité séquentielle',
        body: 'Une fonction f : E → ℝ est continue en a ∈ E si, pour toute suite (xₙ) de E convergeant vers a, la suite (f(xₙ)) converge vers f(a).'
      },
      {
        type: 'proposition',
        title: 'Continuité et invariance des ouverts/fermés',
        body: 'Pour f : E → ℝ, les assertions suivantes sont équivalentes : (1) f est continue ; (2) pour tout ouvert O, f^{-1}(O) est ouvert ; (3) pour tout fermé F, f^{-1}(F) est fermé.'
      },
      {
        type: 'corollaire',
        title: 'Ensemble de zéros',
        body: "Si f est continue, l'ensemble { x ∈ E | f(x) = 0 } est fermé."
      },
      {
        type: 'proposition',
        title: 'Composition',
        body: 'Si f : E → F et g : F → ℝ sont continues, alors g ∘ f est continue.'
      },
      {
        type: 'definition',
        title: 'Lipschitz',
        body: 'f : E → ℝ est K-Lipschitzienne s\'il existe K ≥ 0 tel que |f(x) − f(y)| ≤ K|x − y| pour tous x, y ∈ E.'
      },
      {
        type: 'proposition',
        title: 'Lien entre Lipschitz et continuité',
        body: 'Toute fonction Lipschitzienne est continue. Si f est de classe C¹ sur [a, b], alors f est Lipschitzienne sur [a, b] avec K = sup_{x∈[a,b]} |f\'(x)|.'
      }
    ]
  }
];

const typeStyles = {
  definition: { color: '#1c7ed6', label: 'Définition' },
  proposition: { color: '#f76707', label: 'Proposition' },
  theoreme: { color: '#7048e8', label: 'Théorème' },
  lemme: { color: '#2b8a3e', label: 'Lemme' },
  corollaire: { color: '#d6336c', label: 'Corollaire' }
};

const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const boxPadding = { x: 14, y: 12 };

function ensureSpace(height) {
  if (doc.y + height > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
}

function drawBox(item) {
  const style = typeStyles[item.type];
  const label = style?.label ?? 'Note';
  const color = style?.color ?? '#343a40';
  const innerWidth = contentWidth - 2 * boxPadding.x;
  const heading = `${label} — ${item.title}`;
  const headingHeight = doc.heightOfString(heading, {
    width: innerWidth,
    font: 'Bold',
    fontSize: 14
  });
  const bodyHeight = doc.heightOfString(item.body, {
    width: innerWidth,
    font: 'Regular',
    fontSize: 12
  });
  const boxHeight = headingHeight + bodyHeight + boxPadding.y * 2 + 6;

  ensureSpace(boxHeight + 10);

  const boxX = doc.page.margins.left;
  const boxY = doc.y;

  doc.save();
  doc.lineWidth(2).strokeColor(color).roundedRect(boxX, boxY, contentWidth, boxHeight, 12).stroke();
  doc.rect(boxX, boxY, 8, boxHeight).fillColor(color).fill();
  doc.restore();

  doc.save();
  doc.font('Bold').fontSize(14).fillColor(color).text(heading, boxX + boxPadding.x + 4, boxY + boxPadding.y, {
    width: innerWidth
  });
  doc.moveDown(0.4);
  doc.font('Regular').fontSize(12).fillColor('#212529').text(item.body, {
    width: innerWidth,
    align: 'left'
  });
  doc.restore();

  doc.y = boxY + boxHeight + 12;
}

for (const section of sections) {
  ensureSpace(80);
  doc.fillColor(section.accent).font('Bold').fontSize(18).text(section.heading);
  doc.moveDown(0.4);
  doc.fillColor('#868e96').font('Regular').fontSize(11).text('');

  for (const item of section.items) {
    drawBox(item);
  }
}

doc.end();

stream.on('finish', () => {
  console.log(`PDF généré: ${outputPath}`);
});

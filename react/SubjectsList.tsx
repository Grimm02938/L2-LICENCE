import React from "react";
import {
  Cube,
  Sigma,
  Calculator,
  LineChart,
  Cpu,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

/**
 * Ready-to-use React + Tailwind component that mimics the exact visuals
 * of the shared screenshot: rounded card, thin colored outline, dark tinted fill,
 * pill header with icon + bold uppercase title + caret inside the pill,
 * and a small gray description.
 */

export type Category = {
  key: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  accentRgb: string; // "r g b"
};

export const CATEGORIES: Category[] = [
  {
    key: "topologie",
    title: "Topologie",
    description: "Cette section regroupe les cours de Topologie.",
    Icon: Cube,
    accentRgb: "16 185 129", // emerald
  },
  {
    key: "algebre",
    title: "Algèbre",
    description: "Cette section regroupe les cours d’Algèbre.",
    Icon: Sigma,
    accentRgb: "59 130 246", // blue
  },
  {
    key: "arithmetique",
    title: "Arithmétique",
    description: "Cette section regroupe les cours d’Arithmétique.",
    Icon: Calculator,
    accentRgb: "217 70 239", // fuchsia
  },
  {
    key: "analyse",
    title: "Analyse",
    description: "Cette section regroupe les cours d’Analyse.",
    Icon: LineChart,
    accentRgb: "99 102 241", // indigo
  },
  {
    key: "calcul-numerique",
    title: "Calcul numérique",
    description: "Cette section regroupe les cours de Calcul numérique.",
    Icon: Cpu,
    accentRgb: "14 165 233", // cyan
  },
];

export type CardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  accentRgb: string; // "r g b"
};

export const SubjectCard: React.FC<CardProps> = ({ title, description, Icon, accentRgb }) => {
  const panelStyle: React.CSSProperties = {
    borderColor: `rgba(${accentRgb}, .35)`,
    background: `linear-gradient(0deg, rgba(${accentRgb}, .08), rgba(${accentRgb}, .08)), rgba(17,24,39,.65)`,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)",
  };

  const pillStyle: React.CSSProperties = {
    borderColor: `rgba(${accentRgb}, .35)`,
    background: `rgba(${accentRgb}, .12)`,
    color: `rgb(${accentRgb})`,
  };

  return (
    <div className="rounded-xl border p-3 md:p-4 w-full" style={panelStyle}>
      <div className="flex items-center justify-between">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-sm font-extrabold tracking-tight"
          style={pillStyle}
        >
          <Icon className="h-4 w-4" />
          <span className="uppercase">{title}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </div>
      </div>

      <p className="mt-3 text-[0.95rem] leading-6 text-gray-300/90">{description}</p>
    </div>
  );
};

export const SubjectsList: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-100 mb-6 md:mb-8">Matières</h1>
      <div className="flex flex-col gap-4 md:gap-5">
        {CATEGORIES.map((c) => (
          <SubjectCard
            key={c.key}
            title={c.title}
            description={c.description}
            Icon={c.Icon}
            accentRgb={c.accentRgb}
          />
        ))}
      </div>
    </section>
  );
};

# React Subjects List (Tailwind)

A ready-to-use React + TypeScript + Tailwind component that reproduces your screenshot exactly: dark, outlined cards with a colored pill header and a small description.

## Install

```bash
npm install lucide-react
```

Ensure Tailwind is configured and your page uses a dark background (e.g., `bg-slate-950 text-slate-100`).

## Usage

```tsx
import { SubjectsList } from "./SubjectsList";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <SubjectsList />
    </main>
  );
}
```

## Customize colors
Each category uses an `accentRgb` string (e.g., `"99 102 241"`). Update `CATEGORIES` in `SubjectsList.tsx` to fit your palette.

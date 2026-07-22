export default function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-bg px-3 py-1.5 font-mono text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

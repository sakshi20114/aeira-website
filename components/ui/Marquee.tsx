export default function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 }, () => text);
  return (
    <div className="relative overflow-hidden py-6 border-y border-gold/10 bg-ink">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-6 font-display text-2xl md:text-4xl text-transparent"
            style={{ WebkitTextStroke: "1px rgba(212,175,55,0.5)" }}
          >
            {t} <span className="text-gold mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

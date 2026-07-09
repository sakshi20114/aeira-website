import SplitText from "@/components/ui/SplitText";

export default function LegalPageShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen">
      <div className="container-luxury max-w-3xl">
        <div className="text-center mb-4">
          <span className="eyebrow block mb-4">Legal</span>
          <SplitText
            text={title}
            el="h1"
            className="font-display text-4xl md:text-6xl text-ivory"
          />
        </div>
        <p className="text-center text-xs text-smoke mb-16">
          Last updated: {updated}
        </p>
        <div className="prose prose-invert prose-headings:font-display prose-headings:text-ivory prose-p:text-ivory/60 prose-p:leading-relaxed prose-li:text-ivory/60 prose-a:text-gold max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

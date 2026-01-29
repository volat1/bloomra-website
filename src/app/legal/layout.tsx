import { Header, Footer } from "@/components/layout";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-content">
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[var(--ink-primary)] prose-p:text-[var(--ink-secondary)] prose-a:text-[var(--season-spring-primary)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[var(--ink-primary)] prose-li:text-[var(--ink-secondary)]">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

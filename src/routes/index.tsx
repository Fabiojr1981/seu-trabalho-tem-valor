import { createFileRoute } from "@tanstack/react-router";
import capaDicas from "@/assets/capa-20-dicas.jpg.asset.json";
import capaPreco from "@/assets/capa-precificar.jpg.asset.json";

const LINK_PRECO =
  "https://fabiojr-sweet.hotmart.host/seu-trabalho-tem-valor-e6a28854-8b0b-4ea5-989e-1eadf023e3b9?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const LINK_DICAS =
  "https://copper-emmett-jedha-30.hotmart.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pintura de Valor | Guias para Pintores - Fábio Jr. Costa" },
      { name: "description", content: "Aprenda a precificar seu trabalho e ser um excelente profissional de pintura com os guias de Fábio Jr. Costa." },
      { property: "og:title", content: "Pintura de Valor | Guias para Pintores" },
      { property: "og:description", content: "Postura, orçamento, organização e precificação: seu passo a passo para crescer na pintura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const livros = [
  {
    capa: capaPreco.url,
    tag: "Seu trabalho tem valor",
    titulo: "Guia de Como Precificar Seu Trabalho na Pintura",
    texto: "Pare de cobrar barato. Aprenda a calcular sua mão de obra, montar orçamentos justos e ser valorizado pelo cliente.",
    link: LINK_PRECO,
    variant: "accent" as const,
  },
  {
    capa: capaDicas.url,
    tag: "Guia prático",
    titulo: "20 Dicas para Ser um Excelente Profissional de Pintura",
    texto: "Postura, organização e acabamento: as atitudes que fazem o cliente confiar, indicar e chamar de novo.",
    link: LINK_DICAS,
    variant: "primary" as const,
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <section className="hero-splash relative overflow-hidden px-6 pt-20 pb-16 text-center">
        <p className="text-accent font-semibold tracking-[0.3em] uppercase text-sm">@pinturadevalor</p>
        <h1 className="font-display mt-4 text-5xl md:text-7xl uppercase leading-none">
          Seu trabalho <span className="text-accent">tem valor</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Seu passo a passo para crescer na pintura: postura, orçamento, organização e precificação.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 md:grid-cols-2">
        {livros.map((l) => (
          <article key={l.titulo} className="book-card flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
            <img src={l.capa} alt={`Capa do livro ${l.titulo}`} className="book-cover w-56 md:w-64 rounded-md" loading="lazy" />
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent">{l.tag}</p>
            <h2 className="font-display mt-2 text-3xl uppercase leading-tight">{l.titulo}</h2>
            <p className="mt-4 text-muted-foreground">{l.texto}</p>
            <a href={l.link} target="_blank" rel="noopener noreferrer" className={`cta cta-${l.variant} mt-8`}>
              Quero o meu agora
            </a>
          </article>
        ))}
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Fábio Jr. Costa · Pintura de Valor
      </footer>
    </main>
  );
}

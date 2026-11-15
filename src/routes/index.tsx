import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Ticket, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minha Sorte Premiada" },
      {
        name: "description",
        content: "Participe da Minha Sorte Premiada e acompanhe as informações do sorteio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900">
      <header className="border-b border-amber-900/10 bg-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Minha Sorte Premiada, início">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-amber-950 shadow-sm">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-extrabold leading-tight tracking-wide sm:text-base">
              MINHA SORTE
              <br />
              <span className="text-amber-700">PREMIADA</span>
            </span>
          </a>
          <a
            href="#como-participar"
            className="rounded-full border border-amber-700/20 px-4 py-2 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
          >
            Como participar
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-700/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Sua chance começa aqui
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              A sorte pode
              <br />
              <span className="text-amber-700">bater à sua porta.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Participe da Minha Sorte Premiada. Confira as informações da campanha e prepare-se para concorrer.
            </p>
            <a
              href="#como-participar"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-amber-950 shadow-md shadow-amber-900/10 transition hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              Quero participar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-7 flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="h-4 w-4 text-emerald-700" aria-hidden="true" />
              <span>Informações claras para você participar com confiança</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 p-2 shadow-2xl shadow-amber-900/15">
              <div className="rounded-[1.6rem] border border-white/50 bg-white/95 p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  <Ticket className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-amber-800">Minha Sorte Premiada</p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">Um novo motivo para acreditar na sorte.</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Em breve, você poderá conferir os detalhes da campanha e acessar a participação por aqui.
                </p>
                <div className="mt-7 rounded-xl border border-amber-900/10 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                  <span className="font-semibold">Próximo passo:</span> os detalhes e o acesso de participação serão publicados nesta página.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-participar" className="border-t border-amber-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">Simples e transparente</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">Tudo o que você precisa, em um só lugar.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Esta página está sendo preparada para reunir as informações da campanha e orientar sua participação.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InfoCard number="01" title="Confira a campanha" description="Consulte os detalhes e as regras assim que forem publicados." />
            <InfoCard number="02" title="Acompanhe as novidades" description="Volte para encontrar atualizações sobre a participação." />
            <InfoCard number="03" title="Veja os resultados" description="As informações dos sorteios serão divulgadas nesta página." />
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-900/10 bg-[#fcfbf8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-semibold text-slate-700">Minha Sorte Premiada</span>
          <span>Consulte as informações oficiais da campanha antes de participar.</span>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-amber-900/10 bg-[#fcfbf8] p-5 sm:p-6">
      <span className="text-xs font-extrabold tracking-[0.16em] text-amber-700">{number}</span>
      <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

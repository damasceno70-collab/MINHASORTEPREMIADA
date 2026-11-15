import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Ticket, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minha Sorte Premiada" },
      {
        name: "description",
        content: "Conheça a Minha Sorte Premiada e acompanhe por aqui as informações da campanha.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-slate-900">
      <header className="border-b border-blue-900/10 bg-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Minha Sorte Premiada, início">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-blue-950 shadow-sm">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-extrabold leading-tight tracking-wide text-blue-950 sm:text-base">
              MINHA SORTE
              <br />
              <span className="text-blue-700">PREMIADA</span>
            </span>
          </a>
          <a
            href="#como-participar"
            className="rounded-full border border-blue-700/20 px-4 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Saiba mais
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-yellow-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-700/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Um novo jeito de sonhar
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Sua próxima história
              <br />
              <span className="text-blue-700">pode começar aqui.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A Minha Sorte Premiada está preparando uma nova campanha para você. Acompanhe esta página e confira as informações assim que estiverem disponíveis.
            </p>
            <a
              href="#como-participar"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 shadow-md shadow-blue-900/10 transition hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Quero saber mais
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-7 flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="h-4 w-4 text-blue-700" aria-hidden="true" />
              <span>Informações da campanha reunidas em um só lugar</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900 p-2 shadow-2xl shadow-blue-900/20">
              <div className="rounded-[1.6rem] border border-white/60 bg-white/95 p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-blue-800">
                  <Ticket className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Minha Sorte Premiada</p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl">Fique por dentro de cada novidade.</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Estamos preparando esta página para apresentar os detalhes da campanha e orientar você sobre como acompanhar as próximas etapas.
                </p>
                <div className="mt-7 rounded-xl border border-blue-900/10 bg-blue-50 px-4 py-3 text-sm text-blue-950">
                  <span className="font-semibold">Em breve:</span> informações e orientações oficiais da campanha estarão disponíveis aqui.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-participar" className="border-t border-blue-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Tudo com clareza</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">Acompanhe a campanha por aqui.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Quando os detalhes forem publicados, você poderá consultar as informações e orientações da campanha nesta página.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InfoCard number="01" title="Conheça a campanha" description="Confira as informações e orientações oficiais quando estiverem disponíveis." />
            <InfoCard number="02" title="Acompanhe as novidades" description="Volte a esta página para consultar as atualizações da campanha." />
            <InfoCard number="03" title="Consulte os resultados" description="Os resultados e comunicados serão divulgados pelos canais oficiais da campanha." />
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-900/10 bg-[#f7faff]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-semibold text-blue-950">Minha Sorte Premiada</span>
          <span>Acompanhe os canais oficiais para consultar as informações da campanha.</span>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-blue-900/10 bg-[#f7faff] p-5 sm:p-6">
      <span className="text-xs font-extrabold tracking-[0.16em] text-blue-700">{number}</span>
      <h3 className="mt-3 text-base font-bold text-blue-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, FileText, LineChart, Linkedin, Mail, PieChart, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { about, expertise, journey, nav, profile, services, values } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saima Nawal Umair — ACCA Qualified Accounting Professional" },
      { name: "description", content: "Portfolio of Saima Nawal Umair, ACCA-qualified professional in financial reporting, management accounting and financial analysis." },
      { property: "og:title", content: "Saima Nawal Umair — ACCA Qualified Professional" },
      { property: "og:description", content: "Clarity in numbers. Confidence in every decision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = { FileText, PieChart, LineChart, ShieldCheck };

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Journey />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-rise" style={{ animationDelay: "100ms" }}>ACCA Qualified Professional</p>
          <h1 className="display mt-8 text-[clamp(2.9rem,7vw,6.5rem)]">
            <span className="block animate-rise" style={{ animationDelay: "250ms" }}>Clarity in Numbers.</span>
            <span className="block animate-rise italic text-primary" style={{ animationDelay: "400ms" }}>Confidence in Every Decision.</span>
          </h1>
          <p className="mt-8 max-w-lg animate-rise text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "550ms" }}>
            Bringing financial insight, analytical precision, and a commitment to excellence to every financial challenge.
          </p>
          <div className="mt-12 flex animate-rise flex-wrap gap-4" style={{ animationDelay: "700ms" }}>
            <a href="#expertise" className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:gap-5">
              Explore My Expertise <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center border border-border px-7 py-4 text-xs uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-rise lg:col-span-5 lg:max-w-none" style={{ animationDelay: "500ms" }}>
          <div className="absolute -right-4 -top-4 h-full w-full border border-primary/40" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            {profile.portrait ? (
              <img src={profile.portrait} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-6 bg-[radial-gradient(circle_at_50%_35%,var(--muted),var(--card)_70%)]">
                <span className="display text-[9rem] leading-none text-primary/80">{profile.monogram}</span>
                <span className="eyebrow text-muted-foreground">Portrait coming soon</span>
              </div>
            )}
          </div>
          <p className="eyebrow mt-6 text-right text-muted-foreground">{profile.name}</p>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-3 text-muted-foreground" aria-label="Scroll to About">
        <span className="eyebrow text-[0.6rem] text-muted-foreground">Scroll</span>
        <span className="block h-12 w-px animate-scrollcue bg-primary" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-6">
          <Reveal><SectionLabel>01 — About Me</SectionLabel></Reveal>
          <Reveal delay={100}><h2 className="display mt-8 text-5xl md:text-6xl">Driven by Numbers.<br /><em className="text-primary">Defined by Integrity.</em></h2></Reveal>
          <Reveal delay={200}><p className="mt-10 max-w-xl leading-relaxed text-muted-foreground md:text-lg">{about.body}</p></Reveal>
          <Reveal delay={300}>
            <blockquote className="display mt-12 border-l border-primary pl-6 text-3xl italic text-foreground">“{about.statement}”</blockquote>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-14 grid grid-cols-1 border-t border-border sm:grid-cols-3">
              {about.credentials.map((c) => (
                <div key={c.label} className="border-b border-border py-5 sm:border-b-0 sm:pr-4">
                  <dt className="eyebrow text-muted-foreground">{c.label}</dt>
                  <dd className="mt-2 text-sm text-foreground">{c.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:col-start-8 lg:max-w-none">
          <Reveal variant="img-reveal" className="overflow-hidden">
            <img src={aboutImg} alt="Fountain pen resting on a ledger in warm, low light" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal><SectionLabel>02 — Core Expertise</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="display mt-8 max-w-2xl text-5xl md:text-6xl">Expertise That Builds <em className="text-primary">Confidence.</em></h2></Reveal>
          </div>
        </div>
        <div className="mt-20 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e, i) => {
            const Icon = icons[e.icon];
            return (
              <Reveal key={e.title} delay={i * 120} className="group relative border-b border-r border-border p-8 transition-colors duration-500 hover:bg-card">
                <span className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" aria-hidden />
                <div className="flex items-start justify-between">
                  <Icon className="h-8 w-8 stroke-[1.2] text-primary" aria-hidden />
                  <span className="display text-xl text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="display mt-16 text-3xl transition-transform duration-500 group-hover:-translate-y-1">{e.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal><SectionLabel>03 — Services</SectionLabel></Reveal>
        <Reveal delay={100}><h2 className="display mt-8 text-5xl md:text-6xl">Financial Support <em className="text-primary">With Purpose.</em></h2></Reveal>
        <ul className="mt-20 border-t border-border">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} className="group border-b border-border">
              <div className={`flex flex-col gap-4 py-10 md:grid md:grid-cols-[3rem_minmax(0,1fr)_16rem] md:items-baseline md:gap-8 lg:flex lg:flex-row lg:gap-12 ${i % 2 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                <span className="eyebrow shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display flex-1 text-3xl transition-colors duration-300 group-hover:text-primary md:text-4xl lg:text-5xl">{s.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="experience" className="border-t border-border py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal><SectionLabel>04 — Professional Journey</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="display mt-8 text-5xl">A Commitment to <em className="text-primary">Continuous Growth.</em></h2></Reveal>
          </div>
        </div>
        <ol className="relative border-l border-border lg:col-span-7 lg:col-start-6">
          {journey.map((j, i) => (
            <Reveal as="li" key={i} delay={i * 80} className="relative pb-16 pl-10 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rotate-45 border border-primary bg-background" aria-hidden />
              <p className="eyebrow text-muted-foreground">{j.period}</p>
              <h3 className="display mt-3 text-3xl">{j.title}</h3>
              <p className="mt-1 text-sm text-primary">{j.place}</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{j.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-card py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal><h2 className="display text-center text-5xl md:text-7xl">Beyond the <em className="text-primary">Balance Sheet.</em></h2></Reveal>
        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120} className="bg-card p-10 text-center">
              <span className="display block text-7xl italic text-primary/30">{["I", "II", "III"][i]}</span>
              <h3 className="display mt-6 text-4xl">{v.title}</h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLinks() {
  return (
    <div className="space-y-5 text-sm">
      <a href={profile.email ? `mailto:${profile.email}` : undefined} aria-disabled={!profile.email} className="flex items-center gap-4 text-foreground hover:text-primary">
        <Mail className="h-4 w-4 text-primary" /> {profile.email || "[Email — to be added]"}
      </a>
      <a href={profile.linkedin || undefined} target="_blank" rel="noreferrer" aria-disabled={!profile.linkedin} className="flex items-center gap-4 text-foreground hover:text-primary">
        <Linkedin className="h-4 w-4 text-primary" /> {profile.linkedin ? "LinkedIn" : "[LinkedIn — to be added]"}
      </a>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal><SectionLabel>05 — Let's Connect</SectionLabel></Reveal>
          <Reveal delay={100}><h2 className="display mt-8 text-5xl md:text-6xl">Let's Make Your Next Financial Decision <em className="text-primary">Clearer.</em></h2></Reveal>
          <Reveal delay={200}><p className="mt-8 max-w-md leading-relaxed text-muted-foreground">Have a professional enquiry or want to discuss a potential opportunity? I'd be pleased to hear from you.</p></Reveal>
          <Reveal delay={300} className="mt-12"><ContactLinks /></Reveal>
        </div>
        <Reveal delay={200} className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <p className="display text-3xl">{profile.name}</p>
          <p className="eyebrow mt-2 text-muted-foreground">{profile.descriptor}</p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} className="link-underline hover:text-foreground">{n.label}</a></li>
          ))}
        </ul>
        <div className="text-xs text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="mt-1 text-primary">Designed by Artist</p>
        </div>
      </div>
    </footer>
  );
}

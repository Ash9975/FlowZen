import {
  Sparkles,
  ListChecks,
  Smartphone,
  Users,
  History,
  Zap,
} from "lucide-react";

import { Reveal } from "./Reveal";

const features = [
  {
    icon: Sparkles,
    title: "AI Order Extraction",
    desc: "Convert WhatsApp screenshots, handwritten notes and images into structured orders instantly.",
  },
  {
    icon: ListChecks,
    title: "Smart Packing Checklist",
    desc: "Automatically generate packing checklists and track every item with ease.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Built for warehouse teams and shop staff who work directly from their phones.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Multiple workers can track packing progress without confusion or duplicate work.",
  },
  {
    icon: History,
    title: "Order History",
    desc: "Keep all completed and pending orders organized and searchable in one place.",
  },
  {
    icon: Zap,
    title: "Fast Workflow",
    desc: "Reduce manual work and pack orders significantly faster with AI assistance.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-card/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">

        <Reveal className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Features
          </p>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-balance sm:text-4xl md:text-5xl">
            Everything you need to pack faster
          </h2>

          <p className="mt-4 text-muted-foreground">
            Powerful AI under the hood, dead-simple on the floor.
          </p>

        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.06}
            >
              <div className="group h-full rounded-[1.75rem] border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">

                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
                  <feature.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
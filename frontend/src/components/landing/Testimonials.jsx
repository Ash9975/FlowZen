import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Retail Store Owner",
    quote:
      "FlowZen reduced our packing mistakes and saved hours every day.",
  },
  {
    name: "Amit Patel",
    role: "Warehouse Manager",
    quote:
      "The AI extraction works surprisingly well even with messy WhatsApp orders.",
  },
  {
    name: "Priya Enterprises",
    role: "Distributor",
    quote:
      "We process orders much faster and track everything in one place.",
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">

      <Reveal className="mx-auto max-w-2xl text-center">

        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Testimonials
        </p>

        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Loved by shops & warehouse teams
        </h2>

      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">

        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.08}
          >
            <figure className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-7 shadow-soft">

              <Quote className="h-7 w-7 text-primary-light" />

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">

                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary font-bold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>

                <div>
                  <p className="text-sm font-bold">
                    {t.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>

              </figcaption>

            </figure>
          </Reveal>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
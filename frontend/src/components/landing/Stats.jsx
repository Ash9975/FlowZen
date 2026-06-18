import { Reveal } from "./Reveal";

const stats = [
  {
    value: "95%",
    label: "Fewer Packing Errors",
  },
  {
    value: "3x",
    label: "Faster Order Processing",
  },
  {
    value: "24/7",
    label: "AI Powered Workflow",
  },
];

function Stats() {
  return (
    <section className="px-5 pb-20 md:pb-28">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-primary-foreground shadow-card">

        <div className="grid gap-10 text-center sm:grid-cols-3">

          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
            >
              <p className="font-display text-5xl font-extrabold md:text-6xl">
                {s.value}
              </p>

              <p className="mt-2 text-sm font-semibold opacity-90">
                {s.label}
              </p>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;
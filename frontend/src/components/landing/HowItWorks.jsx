import {
  Upload,
  ScanLine,
  ListChecks,
  CircleCheckBig,
} from "lucide-react";

import { PhoneFrame } from "./PhoneFrame";
import { PackingScreen } from "./PackingScreen";
import {
  UploadScreen,
  ExtractScreen,
  CompleteScreen,
} from "./MockScreen";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Upload,
    title: "Upload Order",
    desc: "Upload a WhatsApp screenshot, handwritten note, or customer order image.",
    screen: <UploadScreen />,
  },
  {
    icon: ScanLine,
    title: "AI Extraction",
    desc: "AI extracts product names, quantities, and units automatically.",
    screen: <ExtractScreen />,
  },
  {
    icon: ListChecks,
    title: "Packing Checklist",
    desc: "Workers check off items as they pack each order.",
    screen: <PackingScreen />,
  },
  {
    icon: CircleCheckBig,
    title: "Order Complete",
    desc: "Track progress and complete orders with confidence.",
    screen: <CompleteScreen />,
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-5 py-20 md:py-28"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          How It Works
        </p>

        <h2 className="mt-3 font-display text-3xl font-extrabold text-balance sm:text-4xl md:text-5xl">
          From messy order to packed in four steps
        </h2>

        <p className="mt-4 text-muted-foreground">
          A workflow built for the way shops and warehouses
          actually receive orders.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal
            key={step.title}
            delay={i * 0.08}
          >
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card">

              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <step.icon className="h-5 w-5" />
                </span>

                <span className="font-display text-sm font-extrabold text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>

              <div className="mt-6 overflow-hidden rounded-3xl bg-background">
                <div className="scale-[0.92] [&>div]:pt-9">
                  <PhoneFrame className="max-w-[210px]">
                    {step.screen}
                  </PhoneFrame>
                </div>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

function CTA() {
  return (
    <section id="cta" className="px-5 pb-24">

      <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-border bg-card px-6 py-16 text-center shadow-card">

        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-light/50 blur-3xl" />

        <div className="relative">

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Ready to simplify order management?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join businesses using AI to manage orders faster and more accurately.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-card"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required · Free to start
          </p>

        </div>

      </Reveal>

    </section>
  );
}

export default CTA;
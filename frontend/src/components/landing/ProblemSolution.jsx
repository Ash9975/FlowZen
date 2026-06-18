import { motion } from "framer-motion";
import { PhoneFrame } from "./PhoneFrame";
import { CompleteScreen } from "./MockScreen";
import { Reveal } from "./Reveal";

function ProblemSolution() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">

        <div className="space-y-5">

          <Reveal>
            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft">
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                The Problem
              </span>

              <p className="mt-4 text-lg font-semibold leading-relaxed">
                Businesses manage orders through scattered WhatsApp chats,
                paper notes and manual lists resulting in missed items,
                errors and wasted hours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-primary/30 bg-secondary/50 p-7 shadow-soft">

              <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                The Solution
              </span>

              <p className="mt-4 text-lg font-semibold leading-relaxed">
                FlowZen automatically organizes every order into
                a clear actionable workflow your team can follow.
              </p>

            </div>
          </Reveal>

        </div>

        <Reveal
          delay={0.15}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
            }}
          >
            <PhoneFrame>
              <CompleteScreen />
            </PhoneFrame>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}

export default ProblemSolution;
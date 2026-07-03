import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";

import { PhoneFrame } from "./PhoneFrame";
import { PackingScreen } from "./PackingScreen";
import { Reveal } from "./Reveal";

function Hero() {
  return (
    <section className="relative">

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C0E94E] opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 md:py-20">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">

            <Reveal>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#C0E94E] bg-white px-4 py-2 text-xs font-bold text-[#597C0F] shadow-sm">

                <Sparkles size={14} />
                AI Order Management

              </div>

            </Reveal>

            <Reveal delay={0.1}>

              <h1 className="mt-6 text-5xl font-extrabold leading-none text-[#1F2E05] md:text-7xl">

                Stop Managing
                <br />
                Orders on
                <br />

                <span className="text-[#86B02A]">
                  WhatsApp.
                </span>

              </h1>

            </Reveal>

            <Reveal delay={0.2}>

              <p className="mt-6 max-w-xl text-lg text-gray-600">

                Upload screenshots, handwritten notes,
                or order images.

                FlowZen automatically extracts items
                and converts them into trackable
                packing checklists.

              </p>

            </Reveal>

            <Reveal delay={0.3}>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/register"
                  className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-full

            bg-[#86B02A]

            px-8
            py-4

            font-semibold
            text-white

            transition-all
            duration-300

            hover:scale-[1.02]
            hover:bg-[#769C24]

            active:scale-95
        "
                >
                  Get Started Free

                  <ArrowRight size={18} />

                </Link>

                <Link
                  to="/login"
                  className="
            inline-flex
            items-center
            justify-center

            rounded-full

            border
            border-[#D8E8B2]

            bg-white

            px-8
            py-4

            font-semibold

            text-[#1F2E05]

            transition-all
            duration-300

            hover:bg-[#F8FAF4]

            active:scale-95
        "
                >
                  Login
                </Link>

              </div>

            </Reveal>

            <Reveal delay={0.4}>

              <div className="mt-8 flex items-center justify-center gap-2 md:justify-start">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="#86B02A"
                    color="#86B02A"
                  />
                ))}

                <span className="text-sm font-medium text-gray-700">
                  Trusted by busy shops & warehouses
                </span>

              </div>

            </Reveal>

          </div>

          {/* Right Mobile Mockup */}
          <Reveal delay={0.2}>

            <div className="relative flex justify-center">

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
              >

                <PhoneFrame>
                  <PackingScreen />
                </PhoneFrame>

              </motion.div>

              {/* Floating Badge */}
              <div className="absolute left-0 top-10 hidden rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-lg md:block">
                🟢 AI reading order...
              </div>

              <div className="absolute bottom-20 right-0 hidden rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-lg md:block">
                50% packed ✓
              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default Hero;
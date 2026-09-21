"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollFlipProps = {
  children: ReactNode;
};

export default function ScrollFlip({ children }: ScrollFlipProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [flipped, setFlipped] = useState(false);

  // Prevent repeated triggering
  const hasTriggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current;

      if (!card || hasTriggered.current) return;

      const rect = card.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Don't allow the flip until the card has
       * entered the viewport properly.
       */
      if (rect.top >= viewportHeight) return;

      /*
       * The card's actual rendered height.
       */
      const cardHeight = rect.height;

      /*
       * How much of the card has moved above
       * the top of the viewport.
       */
      const scrolledPast = -rect.top;

      /*
       * Trigger when roughly 50% of the card
       * has been scrolled past.
       */
      const halfwayPoint = cardHeight * 0.5;

      if (
        scrolledPast >= halfwayPoint &&
        rect.bottom > 0
      ) {
        hasTriggered.current = true;
        setFlipped(true);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Keep the business card visible for 8 seconds.
   */
  useEffect(() => {
    if (!flipped) return;

    const timer = setTimeout(() => {
      setFlipped(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div
      ref={cardRef}
      className="relative w-full"
      style={{
        perspective: "1800px",
      }}
    >
      <motion.div
        className="relative w-full"
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* ================= FRONT ================= */}

        <div
          className="relative w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>

        {/* ================= BUSINESS CARD ================= */}

        <div
          className="absolute inset-0 w-full overflow-hidden rounded-3xl border border-blue-400/50 bg-black/90 shadow-[0_0_45px_rgba(59,130,246,0.25)] backdrop-blur-xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Glow */}

          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative flex h-full min-h-[520px] flex-col justify-between p-8 md:p-12 lg:p-16">

            {/* TOP */}

            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.35em] text-blue-400">
                  DATA • AI • CODE
                </p>

                <div className="mt-5 h-px w-16 bg-blue-400/60" />
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-xl font-bold text-blue-400">
                VG
              </div>
            </div>

            {/* MAIN */}

            <div className="grid gap-10 md:grid-cols-2">

              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  VIDHAN
                  <br />
                  <span className="text-gray-500">
                    GUPTA
                  </span>
                </h2>

                <p className="mt-5 text-sm uppercase tracking-[0.25em] text-blue-400">
                  Data Analyst · AI Enthusiast
                </p>

                <p className="mt-7 max-w-md text-base leading-7 text-gray-400">
                  Turning data into meaningful insights through
                  analytics, technology and continuous learning.
                </p>
              </div>

              <div className="border-l border-white/10 pl-8 md:pl-10">

                <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                  Get In Touch
                </p>

                <div className="space-y-5">

                  <a
                    href="mailto:guptavidhan42@gmail.com"
                    className="flex items-center gap-4 text-gray-300 transition-colors hover:text-blue-400"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                      @
                    </span>

                    <span className="text-sm">
                      guptavidhan42@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vidhan-gupta-901b7424a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 transition-colors hover:text-blue-400"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                      in
                    </span>

                    <span className="text-sm">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="https://github.com/GuptaVidhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 transition-colors hover:text-blue-400"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                      &lt;/&gt;
                    </span>

                    <span className="text-sm">
                      GitHub
                    </span>
                  </a>

                </div>
              </div>
            </div>

            {/* BOTTOM */}

            <div className="flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between">

              <p className="font-mono text-xs tracking-[0.35em] text-blue-400">
                DATA • IDEAS • INSIGHTS • IMPACT
              </p>

              <p className="text-2xl italic text-gray-300">
                Let's build
                <br />
                <span className="text-blue-400">
                  together.
                </span>
              </p>

            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
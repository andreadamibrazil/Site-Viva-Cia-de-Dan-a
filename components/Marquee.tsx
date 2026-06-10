"use client";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";

type ItemType = "place" | "event" | "award";

const items: { text: string; type: ItemType }[] = [
  { text: "Rio de Janeiro",                  type: "place"  },
  { text: "Copa do Mundo FIFA 2014",         type: "event"  },
  { text: "Maracanã",                        type: "place"  },
  { text: "Olimpíadas Rio 2016",             type: "event"  },
  { text: "SESC RJ",                         type: "place"  },
  { text: "Prêmio Arte & Escola",            type: "award"  },
  { text: "Teatro Carlos Gomes",             type: "place"  },
  { text: "MICA Argentina 2023",             type: "event"  },
  { text: "Centro Cultural Banco do Brasil", type: "place"  },
  { text: "MoviRio Festival",                type: "event"  },
  { text: "Praça Tiradentes",                type: "place"  },
  { text: "Prêmio Zilka Salaberry",          type: "award"  },
  { text: "Teatro Municipal RJ",             type: "place"  },
  { text: "Sesc Palladium",                  type: "place"  },
  { text: "Buenos Aires",                    type: "place"  },
  { text: "27 cidades alcançadas",           type: "event"  },
  { text: "48 equipamentos culturais",       type: "event"  },
  { text: "Parque Lage",                     type: "place"  },
  { text: "Fomento Cidade Olímpica",         type: "award"  },
  { text: "São Paulo",                       type: "place"  },
];

const TYPE_STYLE: Record<ItemType, { dot: string; text: string }> = {
  place: { dot: "bg-areia/35",   text: "text-areia/60"  },
  event: { dot: "bg-dourado/60", text: "text-dourado/80" },
  award: { dot: "bg-dourado",    text: "text-dourado"   },
};

function Item({ text, type }: { text: string; type: ItemType }) {
  const s = TYPE_STYLE[type];
  return (
    <span className="inline-flex items-center gap-2.5 shrink-0 px-5">
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
      <span className={`font-display font-medium text-[11px] tracking-[0.18em] uppercase whitespace-nowrap ${s.text}`}>
        {text}
      </span>
    </span>
  );
}

export function Marquee() {
  const shouldReduce = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 4], { clamp: false });
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (shouldReduce || paused) return;
    const vf = velocityFactor.get();
    const speed = 0.032 * (1 + Math.abs(vf) * 0.4);
    const newX = x.get() - speed * delta;
    const half = containerRef.current ? containerRef.current.scrollWidth / 2 : 0;
    if (half > 0 && Math.abs(newX) >= half) x.set(newX + half);
    else x.set(newX);
  });

  const makeRow = (copy: "a" | "b") =>
    items.flatMap((item, i) => [
      <Item key={`${copy}-i-${i}`} text={item.text} type={item.type} />,
      <span key={`${copy}-s-${i}`} className="inline-flex items-center shrink-0 px-1" aria-hidden="true">
        <span className="w-px h-3 bg-areia/[0.08]" />
      </span>,
    ]);

  if (shouldReduce) {
    return (
      <div className="overflow-hidden py-3.5 bg-terra border-y border-areia/[0.06]">
        <div className="flex flex-wrap gap-x-3 gap-y-2 px-6 justify-center">
          {items.slice(0, 10).map((item) => (
            <Item key={item.text} text={item.text} type={item.type} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden py-3.5 bg-terra border-y border-areia/[0.06] cursor-default select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
    >
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          style={{ x }}
        >
          {[...makeRow("a"), ...makeRow("b")]}
        </motion.div>
      </div>
    </div>
  );
}

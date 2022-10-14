import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
}

interface Props {
  name: string;
  children: ReactNode;
}

export function Paragraph({ name, children }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "50vh");

  return (
    <section>
      <div ref={ref} style={{ aspectRatio: "3/2", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {children}
      </div>
      <motion.h2 style={{ y: '-50vh', color: 'var(--orange)' }}>{name}</motion.h2>
    </section>
  );
}

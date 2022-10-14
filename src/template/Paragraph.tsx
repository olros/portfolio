import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export function Paragraph({ name, children }: Props) {
  const ref = useRef(null);
  return (
    <section>
      <div ref={ref} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {children}
      </div>
      <motion.h2 style={{ y: '-15vh', color: 'var(--orange)' }}>{name}</motion.h2>
    </section>
  );
}

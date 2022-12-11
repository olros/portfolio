import { cloneElement, ReactElement, useEffect, useState } from 'react';

export type DelayedRenderProps = { children: ReactElement; delay: number; style?: React.CSSProperties };

export const DelayedRender = ({ children, delay, style = {} }: DelayedRenderProps) => {
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowImg(true), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);
  return cloneElement(children, { style: { ...style, transition: 'opacity 0.75s', opacity: showImg ? 1 : 0 } });
};

import { ReactElement, useEffect, useState } from 'react';

import { FadeIn } from './FadeIn';

export type DelayedRenderProps = { children: ReactElement; delay: number; style?: React.CSSProperties };

export const DelayedRender = ({ children, delay, style = {} }: DelayedRenderProps) => {
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowImg(true), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);
  return (
    <FadeIn style={style} visible={showImg}>
      {children}
    </FadeIn>
  );
};

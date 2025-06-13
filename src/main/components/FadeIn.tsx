import { cloneElement, ReactElement } from 'react';

export type FadeInProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any>;
  visible: boolean;
  style?: React.CSSProperties;
};

export const FadeIn = ({ children, style, visible }: FadeInProps) =>
  cloneElement(children, { style: { ...style, transition: 'opacity 0.75s', opacity: visible ? 1 : 0, height: visible ? 'auto' : 0 } });

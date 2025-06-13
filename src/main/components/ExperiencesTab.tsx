import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { TabRenderProps } from '../ApplicationContext';
import { Experience, experiences } from '../experiences';
import { DelayedRender } from './DelayedRender';
import { FadeIn } from './FadeIn';
import { Terminal } from './Terminal';

type ExperienceItemProps = { experience: Experience; index: number };

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const [displayImage, setDisplayImage] = useState(false);
  const delay = 100 + index * 250;
  return (
    <>
      <span className='experience'>
        <FadeIn visible={displayImage}>
          <img alt='' className='experience__img' src={experience.image} />
        </FadeIn>
        <span className='experience__text'>
          <a href={experience.link} rel='noreferrer' target='_blank'>
            <TypeAnimation
              cursor={false}
              repeat={0}
              sequence={[delay, `${experience.company}`, () => setDisplayImage(true)]}
              speed={80}
              style={{ fontSize: '1.3rem' }}
            />
          </a>
          <TypeAnimation cursor={false} repeat={0} sequence={[delay + 50, `${experience.type}`]} speed={80} />
          <TypeAnimation cursor={false} repeat={0} sequence={[delay + 100, `${experience.when}`]} speed={80} />
        </span>
      </span>
      <DelayedRender delay={delay + 250} style={{ margin: '1rem 0', borderBottom: '1px solid #333333', width: '100%' }}>
        <span />
      </DelayedRender>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ExperiencesTab = (_: TabRenderProps) => (
  <Terminal>
    {experiences.map((experience, i) => (
      <ExperienceItem experience={experience} index={i} key={experience.id} />
    ))}
  </Terminal>
);

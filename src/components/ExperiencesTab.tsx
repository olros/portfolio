import { TypeAnimation } from 'react-type-animation';

import { Experience, experiences } from '../experiences';
import { DelayedRender } from './DelayedRender';
import { Terminal } from './Terminal';

type ExperienceItemProps = { experience: Experience; index: number };

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const delay = 100 + index * 250;
  return (
    <>
      <span className='experience'>
        <DelayedRender delay={delay + 150}>
          <img alt='' className='experience__img' src={experience.image} />
        </DelayedRender>
        <span className='experience__text'>
          <a href={experience.link} rel='noreferrer' target='_blank'>
            <TypeAnimation cursor={false} repeat={0} sequence={[delay, `${experience.company}`]} speed={80} style={{ fontSize: '1.3rem' }} wrapper='span' />
          </a>
          <TypeAnimation cursor={false} repeat={0} sequence={[delay + 50, `${experience.type}`]} speed={80} wrapper='span' />
          <TypeAnimation cursor={false} repeat={0} sequence={[delay + 100, `${experience.when}`]} speed={80} wrapper='span' />
        </span>
      </span>
      <DelayedRender delay={delay + 250} style={{ margin: '1rem 0', borderBottom: '1px solid #333333', width: '100%' }}>
        <span />
      </DelayedRender>
    </>
  );
};

export const ExperiencesTab = () => (
  <Terminal>
    {experiences.map((experience, i) => (
      <ExperienceItem experience={experience} index={i} key={experience.id} />
    ))}
  </Terminal>
);

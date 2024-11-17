import { ReactNode } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

import { stats } from '../../stats';

export type TerminalProps = { children: ReactNode };

export const Terminal = ({ children }: TerminalProps) => {
  const defaultCommand = (command: string, commandArguments: string) => {
    const text = `${command} ${commandArguments}`;
    stats.event(`Message typed in terminal`);
    if (text.includes('hjelp')) {
      stats.event(`User rickrolled`);
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      return 'Hihi';
    }
    if (text.includes('git')) {
      return 'Min GitHub er https://github.com/olros';
    }
    if (text.includes('hei') || text.includes('hello')) {
      return 'Hei til deg og!';
    }
    if (text.includes('?')) {
      return 'Klikk på et prosjekt for å lese mer om det, se bilder og evt link til kode/demo.';
    }
    return `Jeg har dessverre ikke laget en Chat-bot à la ChatGPT, skriv "hjelp" for å se hva som er mulig.`;
  };

  return (
    <TerminalContextProvider>
      <ReactTerminal
        defaultHandler={defaultCommand}
        prompt='$'
        showControlBar={false}
        theme='material-dark'
        welcomeMessage={<p className='information'>{children}</p>}
      />
    </TerminalContextProvider>
  );
};

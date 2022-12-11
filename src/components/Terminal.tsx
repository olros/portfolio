import { ReactNode } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

export const Terminal = ({ children }: { children: ReactNode }) => {
  const defaultCommand = (command: string, commandArguments: string) => {
    const text = `${command} ${commandArguments}`;
    if (text.includes('hjelp')) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      // window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
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
    if (text.includes('hei') || text.includes('hello')) {
      return 'Hei til deg og!';
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

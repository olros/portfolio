export type Project = {
  id: string;
  when: string;
  title: string;
  description: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'sanntid-wear',
    when: 'Sommer 2022',
    title: 'Sanntid - Wear OS',
    description:
      "Testet ut Jetpack Compose for utvikling av en Wear OS app. Appen viser avgangstider for alle holdeplasser i hele Norge ved bruk av EnTur's apier. Man kan søke etter holdeplasser, markere favoritter og finne holdeplasser i nærheten.",
    demo: 'https://play.google.com/store/apps/details?id=com.olafros.wear.sanntid',
    github: 'https://github.com/olros/SanntidWear',
  },
  {
    id: 'tihlde',
    when: 'Høst 2019 - Vår 2022',
    title: 'TIHLDE',
    description: `Arbeidet frivillig i TIHLDE Index, linjeforeningens undergruppe med ansvar for nettsiden. Jobbet fullstack med React/Typescript frontend og Django/Python backend. Var nestleder i ett år.

Jeg ledet blant annet et migreringprosjekt fra Javascript til Typescript. I tillegg hadde jeg ansvar for hosting og ledet arbeidet med å gå fra on-premise til hosting hos Azure.`,
    demo: 'https://tihlde.org',
    github: 'https://github.com/tihlde/Kvark',
  },
  {
    id: 'codebin',
    when: 'Sommer 2021',
    title: 'Codebin',
    description:
      'Prosjekt der jeg testet ut Vite.js som byggsystem og Supabase for database. Codebin gjør det mulig å raskt lage og dele kodesnutter med andre. Javascript-kode kan også kjøres direkte i nettleseren.',
    demo: 'https://code.olafros.com/',
    github: 'https://github.com/olros/codebin',
  },
  {
    id: 'rombestilling',
    when: 'Vår 2021',
    title: 'Rombestilling',
    description:
      'Skoleprosjekt i Full-Stack der gruppen min lagde en frontend-applikasjon i React og backend-applikasjon i Spring Boot (Kotlin). I applikasjonen kan man opprette rom med underdeler som andre kan booke på ønskede tidspunkter.',
    demo: 'https://rombestilling.vercel.app/',
    github: 'https://github.com/olros/NTNU/tree/main/IDATT2105%20Full-stack%20applikasjonsutvikling/Rombestilling',
  },
  {
    id: 'gidd',
    when: 'Vår 2021',
    title: 'GIDD',
    description:
      'Skoleprosjekt i Systemutvikling 2 der gruppen min lagde en frontend-applikasjon i React og backend-applikasjon i Spring Boot (Java). I applikasjonen kan man opprette små arrangementer som andre kan melde seg på, kommunisere med andre deltagere og dele både arrangementer og annet man måtte ønske med følgerne sine i sin egen feed.',
    demo: 'https://gidd-idatt2106.web.app/',
    github: 'https://github.com/olros/NTNU/tree/main/IDATT2106%20Systemutvikling%202%20med%20smidig%20prosjekt',
  },
  {
    id: 'live',
    when: 'Jul 2020',
    title: 'Live',
    description:
      'Prosjekt der jeg testet ut Kotlin i kombinasjon med Spring Boot, samt Next.js. Satte opp eget auth-system og kombinerte det med et system der man kan legge inn ligaer, lag, kamper, spillere og kampoppdateringer.',
    demo: 'https://live.olafros.com/',
    github: 'https://github.com/olros/live',
  },
  {
    id: 'ntnui',
    when: 'Høst 2019 - Vår 2021',
    title: 'NTNUI Medlemssystem',
    description:
      'Jobbet frivillig som fullstack-utvikler i NTNUI Sprint. Sprint er en undergruppe som har ansvaret for NTNUIs digitale plattform. Jeg var med på å utvikle et medlemssystem for NTNUIs mer enn 12.000 medlemmer der jeg jobbet både med frontend (Vue.js, Typescript) og backend (Python, Django, Docker).',
    demo: 'https://medlem.ntnui.no',
  },
  {
    id: 'matplan',
    when: 'Høst 2020',
    title: 'Matplan',
    description:
      'Prosjekt der jeg ønsket å kunne legge inn planene mine om hva jeg skal ha til middag i de kommende dagene. Man kan også legge inn handleliste, se en oversikt over utgiftene dine og lage matoppskrifter.',
    demo: 'https://matplan.olafros.com',
    github: 'https://github.com/olros/matplan',
  },
  {
    id: 'stand',
    when: 'Sommer 2020',
    title: 'NTNUI Virtuell stand',
    description:
      'På grunn av korona kunne ikke NTNU arrangere en vanlig immatrikulering som tidligere år. Dermed måtte organisasjoner lage virtuelle stands for å promotere seg selv, noe jeg fikk ansvar for hos NTNUI. Lagde en side der alle gruppene kunne legge inn info og bilder om seg selv for å skaffe nye medlemmer ved bruk av React og Firebase.',
    demo: 'https://stand.ntnui.no',
    github: 'https://github.com/ntnui/virtual-stand',
  },
  {
    id: 'snakk',
    when: 'Påske 2020',
    title: 'Snakk',
    description:
      'For å lære mer om Firebase og WebRTC, lagde jeg en videochat-applikasjon. Brukere kan opprette 1 til 1 chatter med andre ved kun å dele linken. Man kan også dele skjerm.',
    demo: 'https://snakk.olafros.com',
    github: 'https://github.com/olros/snakk',
  },
  {
    id: 'monopol',
    when: 'Påske 2020',
    title: 'Monopol Bank',
    description:
      'For å lære mer om Firebase, lagde jeg en digital bank for bruk i monopolspill. Brukere kan opprette spill, invitere andre deltagere, gjennomføre transaksjoner og se logger.',
    demo: 'https://monopol.olafros.com',
    github: 'https://github.com/olros/monopoly-bank',
  },
  {
    id: 'sanntid',
    when: '2016 - 2018',
    title: 'Sanntid',
    description:
      "Prosjekt jeg hold på med gjennom VGS og som lærte meg HTML, CSS og Javascript. Bruker EnTur sine api'er til å vise avgangstider og reiseruter for kollektivtransport i hele Norge. Laget helt uten noe rammeverk.",
    demo: 'https://sanntid.olafros.com',
    github: 'https://github.com/olros/sanntid',
  },
  {
    id: 'vgs',
    when: '2016 - 2019',
    title: 'VGS',
    description: 'En samling av diverse prosjekter og sider jeg lagde på VGS.',
    demo: 'https://vgs.olafros.com',
  },
];

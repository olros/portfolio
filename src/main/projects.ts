import boliglanskalkulator from './assets/projects/boliglanskalkulator.png';
import codebin from './assets/projects/codebin.jpg';
import gidd from './assets/projects/gidd.jpg';
import infoskjerm from './assets/projects/infoskjerm.jpg';
import krigsseilerregisteret from './assets/projects/krigsseilerregisteret.jpg';
import live from './assets/projects/live.jpg';
import matplan from './assets/projects/matplan.jpg';
import monopol from './assets/projects/monopol.jpg';
import ntnui from './assets/projects/ntnui.jpg';
import portfolio from './assets/projects/portfolio.png';
import pythons_event_registration from './assets/projects/pythons_event_registration.png';
import rombestilling from './assets/projects/rombestilling.jpg';
import sanntid_wear from './assets/projects/sanntid_wear.jpg';
import sanntid from './assets/projects/sanntid.jpg';
import snakk from './assets/projects/snakk.jpg';
import stand from './assets/projects/stand.jpg';
import stats from './assets/projects/stats.png';
import tihlde from './assets/projects/tihlde.jpg';
import vgs from './assets/projects/vgs.jpg';

export type Project = {
  id: string;
  when: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Readonly<Project[]> = [
  {
    id: 'boliglanskalkulator',
    when: 'Juni 2025',
    title: 'Boliglånskalkulator',
    image: boliglanskalkulator,
    description: `Vibe-kodet en boliglånskalkulator med Cursor som også lar deg se hvordan fremtidige renteendringer vil påvirke lånet ditt.
Ved å legge inn lånebeløp, rente og nedbetalingstid kan du se hvor mye du må betale hver måned. Du kan også se hvor mye du betaler i renter og avdrag i løpet av hele lånetiden.
Du kan også se hvor mye du sparer på å betale like mye som du allerede gjør, selv om renten går ned.
I tillegg kan du legge inn ekstra innbetalinger på spesifikke datoer for å se hvordan det påvirker lånet ditt.
Neppe den beste koden eller den peneste boliglånskalkulatoren som finnes, men gøy å se hva man kan lage på et par timer med Cursor ✨`,
    demo: 'https://boliglanskalkulator.olafros.com/',
    github: 'https://github.com/olros/boliglanskalkulator',
  },
  {
    id: 'stats',
    when: 'Januar 2023 - Januar 2025',
    title: 'Stats',
    image: stats,
    description: `Stats er et enkelt verktøy for statistikk i applikasjoner som ble laget for å erstatte egen bruk av Google Analytics. Det gir mulighet til å registrere antall sidevisninger, unike brukere og egne hendelser. En kan se trender og oversikter over data som kommer inn.
      
Verktøyet er organisert med teams som har prosjekter. Dermed kan brukere være medlem av flere teams samtidig. Brukere logger inn med GitHub-kontoen sin.

Stats tilbyr flere forskjellige måter å sende inn analyse-data; gjennom en <script>-tag, en egen NPM-pakke (@olros/stats) eller gjennom HTTP-forespørsler.`,
    demo: 'https://stats.olafros.com/',
    github: 'https://github.com/olros/stats',
  },
  {
    id: 'infoskjerm',
    when: 'Desember 2022',
    title: 'Infoskjerm',
    image: infoskjerm,
    description:
      'Laget enkel infoskjerm som en for eksempel kan sette opp i gangen sin. Den lar bruker se avganger i sanntid fra sin holdeplass, været nå og neste 90 minutter, samt dagens strømpriser i valgt strømregion.',
    demo: 'https://infoskjerm.olafros.com/',
    github: 'https://github.com/olros/infoskjerm',
  },
  {
    id: 'portfolio',
    when: 'Høst 2022',
    title: 'Portfolio',
    image: portfolio,
    description:
      'Laget med et lite ønske om en litt annerledes portfolio, samt for å ha gøy når alternativet er å lese pensum. Relativt enkelt oppsett med bruk av NPM-pakkene react-terminal og react-type-animation for utseende og skrive-animasjoner.',
    demo: 'https://olafros.com',
    github: 'https://github.com/olros/portfolio',
  },
  {
    id: 'pythons_event_registration',
    when: 'Høst 2022 - Vår 2024',
    title: 'TIHLDE Pythons event-registrering',
    image: pythons_event_registration,
    description:
      'For å slippe å bruke excel-ark innad i fotballaget utviklet en jeg sammen med @maxschau et eget registreringssystem. Her kan spillerne enkelt melde seg på/av treninger, kamper og sosiale arrangementer. Applikasjonen gir statistikker for blant annet mål, assist og kort, samt oppmøte-statistikk. I tillegg får administratorer en enkel oversikt over hvem som skal motta internbøter på grunn av eventuelle for sene påmeldinger.',
    demo: 'https://pythons.tihlde.org/',
    github: 'https://github.com/TIHLDE/pythons_event_registration',
  },
  {
    id: 'sanntid-wear',
    when: 'Sommer 2022',
    title: 'Sanntid - Wear OS',
    image: sanntid_wear,
    description:
      "Testet ut Jetpack Compose for utvikling av en Wear OS app. Appen viser avgangstider for alle holdeplasser i hele Norge ved bruk av EnTur's apier. Man kan søke etter holdeplasser, markere favoritter og finne holdeplasser i nærheten.",
    demo: 'https://play.google.com/store/apps/details?id=com.olafros.wear.sanntid',
    github: 'https://github.com/olros/SanntidWear',
  },
  {
    id: 'tihlde',
    when: 'Høst 2019 - Vår 2022',
    title: 'TIHLDE',
    image: tihlde,
    description: `Arbeidet frivillig i TIHLDE Index, linjeforeningens undergruppe med ansvar for nettsiden. Jobbet fullstack med React/Typescript frontend og Django/Python backend. Var nestleder i ett år.

Jeg ledet blant annet et migreringprosjekt fra Javascript til Typescript. I tillegg hadde jeg ansvar for hosting og ledet arbeidet med å gå fra on-premise til hosting hos Azure.`,
    demo: 'https://tihlde.org',
    github: 'https://github.com/tihlde/Kvark',
  },
  {
    id: 'codebin',
    when: 'Sommer 2021',
    title: 'Codebin',
    image: codebin,
    description:
      'Prosjekt der jeg testet ut Vite.js som byggsystem og Supabase for database. Codebin gjør det mulig å raskt lage og dele kodesnutter med andre. Javascript-kode kan også kjøres direkte i nettleseren.',
    demo: 'https://code.olafros.com/',
    github: 'https://github.com/olros/codebin',
  },
  {
    id: 'rombestilling',
    when: 'Vår 2021',
    title: 'Rombestilling',
    image: rombestilling,
    description:
      'Skoleprosjekt i Full-Stack der gruppen min lagde en frontend-applikasjon i React og backend-applikasjon i Spring Boot (Kotlin). I applikasjonen kan man opprette rom med underdeler som andre kan booke på ønskede tidspunkter.',
    demo: 'https://rombestilling.vercel.app/',
    github: 'https://github.com/olros/NTNU/tree/main/IDATT2105%20Full-stack%20applikasjonsutvikling/Rombestilling',
  },
  {
    id: 'gidd',
    when: 'Vår 2021',
    title: 'GIDD',
    image: gidd,
    description:
      'Skoleprosjekt i Systemutvikling 2 der gruppen min lagde en frontend-applikasjon i React og backend-applikasjon i Spring Boot (Java). I applikasjonen kan man opprette små arrangementer som andre kan melde seg på, kommunisere med andre deltagere og dele både arrangementer og annet man måtte ønske med følgerne sine i sin egen feed.',
    github: 'https://github.com/olros/NTNU/tree/main/IDATT2106%20Systemutvikling%202%20med%20smidig%20prosjekt',
  },
  {
    id: 'live',
    when: 'Jul 2020',
    title: 'Live',
    image: live,
    description:
      'Prosjekt der jeg testet ut Kotlin i kombinasjon med Spring Boot, samt Next.js. Satte opp eget auth-system og kombinerte det med et system der man kan legge inn ligaer, lag, kamper, spillere og kampoppdateringer.',
    demo: 'https://live.olafros.com/',
    github: 'https://github.com/olros/live',
  },
  {
    id: 'ntnui',
    when: 'Høst 2019 - Vår 2021',
    title: 'NTNUI Medlemssystem',
    image: ntnui,
    description:
      'Jobbet frivillig som fullstack-utvikler i NTNUI Sprint. Sprint er en undergruppe som har ansvaret for NTNUIs digitale plattform. Jeg var med på å utvikle et medlemssystem for NTNUIs mer enn 12.000 medlemmer der jeg jobbet både med frontend (Vue.js, Typescript) og backend (Python, Django, Docker).',
    demo: 'https://medlem.ntnui.no',
  },
  {
    id: 'matplan',
    when: 'Høst 2020',
    title: 'Matplan',
    image: matplan,
    description:
      'Prosjekt der jeg ønsket å kunne legge inn planene mine om hva jeg skal ha til middag i de kommende dagene. Man kan også legge inn handleliste, se en oversikt over utgiftene dine og lage matoppskrifter.',
    demo: 'https://matplan.olafros.com',
    github: 'https://github.com/olros/matplan',
  },
  {
    id: 'stand',
    when: 'Sommer 2020',
    title: 'NTNUI Virtuell stand',
    image: stand,
    description:
      'På grunn av korona kunne ikke NTNU arrangere en vanlig immatrikulering som tidligere år. Dermed måtte organisasjoner lage virtuelle stands for å promotere seg selv, noe jeg fikk ansvar for hos NTNUI. Lagde en side der alle gruppene kunne legge inn info og bilder om seg selv for å skaffe nye medlemmer ved bruk av React og Firebase.',
    demo: 'https://stand.ntnui.no',
    github: 'https://github.com/ntnui/virtual-stand',
  },
  {
    id: 'snakk',
    when: 'Påske 2020',
    title: 'Snakk',
    image: snakk,
    description:
      'For å lære mer om Firebase og WebRTC, lagde jeg en videochat-applikasjon. Brukere kan opprette 1 til 1 chatter med andre ved kun å dele linken. Man kan også dele skjerm.',
    demo: 'https://snakk.olafros.com',
    github: 'https://github.com/olros/snakk',
  },
  {
    id: 'monopol',
    when: 'Påske 2020',
    title: 'Monopol Bank',
    image: monopol,
    description:
      'For å lære mer om Firebase, lagde jeg en digital bank for bruk i monopolspill. Brukere kan opprette spill, invitere andre deltagere, gjennomføre transaksjoner og se logger.',
    demo: 'https://monopol.olafros.com',
    github: 'https://github.com/olros/monopoly-bank',
  },
  {
    id: 'krigsseilerregisteret',
    when: 'April 2019',
    title: 'Krigsseilerregisteret',
    image: krigsseilerregisteret,
    description: 'Utviklet et enkelt kart for Krigsseilerregisteret som viser hvor skipene i deres registre forliste og hva som var årsaken til forliset.',
    demo: 'https://www.krigsseilerregisteret.no/kart-over-forlis',
  },
  {
    id: 'sanntid',
    when: '2016 - 2018',
    title: 'Sanntid',
    image: sanntid,
    description:
      "Prosjekt jeg holdt på med gjennom VGS og som lærte meg HTML, CSS og Javascript. Bruker EnTur sine api'er til å vise avgangstider og reiseruter for kollektivtransport i hele Norge. Laget helt uten noe rammeverk.",
    demo: 'https://sanntid.olafros.com',
    github: 'https://github.com/olros/sanntid',
  },
  {
    id: 'vgs',
    when: '2016 - 2019',
    title: 'VGS',
    image: vgs,
    description: 'En samling av diverse prosjekter og sider jeg lagde på VGS.',
    demo: 'https://vgs.olafros.com',
  },
] as const;

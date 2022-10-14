export type Project = {
  id: string;
  when: string;
  title: string;
  backgroundColor: React.CSSProperties["backgroundColor"];
  description: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "tihlde",
    when: "Høst 2019 - Vår 2022",
    title: "TIHLDE",
    description:
      "Jobber frivillig som nestleder og frontend-ansvarlig i TIHLDE Index. Vi utvikler og vedlikeholder nettsiden til TIHLDE. Jeg har blant annet jobbet med en komplett redesign av siden, samt et nytt eventsystem for foreningens medlemmer.",
    backgroundColor: "var(--green)",
    demo: "https://tihlde.org",
    github: "https://github.com/tihlde/Kvark",
  },
  {
    id: "codebin",
    when: "Sommer 2021",
    title: "Codebin",
    description:
      "Prosjekt der jeg testet ut Vite.js som byggsystem og Supabase for database. Codebin det mulig å raskt lage og dele kodesnutter med andre. Javascript og Typescript-kode kan også kjøres direkte i nettleseren.",
    backgroundColor: "var(--dusk)",
    demo: "https://code.olafros.com/",
    github: "https://github.com/olros/codebin",
  },
  {
    id: "rombestilling",
    when: "Vår 2021",
    title: "Rombestilling",
    description:
      "Skoleprosjekt i Full-Stack der gruppen min lagde en frontend-applikasjon i React og backend-applikasjon i Spring Boot (Kotlin). I applikasjonen kan man opprette rom med underdeler som andre kan booke på ønskede tidspunkter.",
    backgroundColor: "var(--purple)",
    demo: "https://rombestilling.vercel.app/",
    github: "https://github.com/olros/Rombestilling",
  },
  {
    id: "gidd",
    when: "Vår 2021",
    title: "GIDD",
    description:
      "Skoleprosjekt i Systemutvikling 2 der gruppen min lagde en frontend-applikasjon i React og backend-applikasjon i Spring Boot (Java). I applikasjonen kan man opprette små arrangementer som andre kan melde seg på, kommunisere med andre deltagere og dele både arrangementer og annet man måtte ønske med følgerne sine i sin egen feed.",
    backgroundColor: "var(--pink)",
    demo: "https://gidd-idatt2106.web.app/",
    github: "https://github.com/olros/GIDD",
  },
  {
    id: "live",
    when: "Jul 2020",
    title: "Live",
    description:
      "Prosjekt der jeg testet ut Kotlin i kombinasjon med Spring Boot, samt Next.js. Satte opp eget auth-system og kombinerte det med et system der man kan legge inn ligaer, lag, kamper, spillere og kampoppdateringer.",
    backgroundColor: "var(--red)",
    demo: "https://live.olafros.com/",
    github: "https://github.com/olros/live",
  },
  {
    id: "ntnui",
    when: "Høst 2019 - Vår 2021",
    title: "NTNUI Medlemssystem",
    description:
      "I NTNUI Sprint jobbet jeg frivillig med å utvikle et nytt medlemssystem som vi bygget selv fra bunnen. Jeg jobber som frontendutvikler med teknologier som Vue.js, Typescript, Docker og Figma, samt noe backend i Django-rest.",
    backgroundColor: "var(--orange)",
    demo: "https://medlem.ntnui.no",
  },
  {
    id: "matplan",
    when: "Høst 2020",
    title: "Matplan",
    description:
      "Prosjekt der jeg ønsket å kunne legge inn planene mine om hva jeg skal ha til middag i de kommende dagene. Man kan også legge inn handleliste, se en oversikt over utgiftene dine og lage matoppskrifter.",
    backgroundColor: "var(--yellow)",
    demo: "https://matplan.olafros.com",
    github: "https://github.com/olros/matplan",
  },
  {
    id: "stand",
    when: "Sommer 2020",
    title: "NTNUI Virtuell stand",
    description:
      "På grunn av korona kunne ikke NTNU arrangere en vanlig immatrikulering som tidligere år. Dermed måtte organisasjoner lage virtuelle stands for å promotere seg selv, noe jeg fikk ansvar for hos NTNUI. Lagde en side der alle gruppene kunne legge inn info og bilder om seg selv for å skaffe nye medlemmer ved bruk av React og Firebase.",
    backgroundColor: "var(--sky)",
    demo: "https://stand.ntnui.no",
    github: "https://github.com/ntnui/virtual-stand",
  },
  {
    id: "snakk",
    when: "Påske 2020",
    title: "Snakk",
    description:
      "Som en del av et ønske om å lære meg mer om Firebase og WebRTC, lagde jeg en videochat-applikasjon. Brukere kan opprette 1 til 1 chatter med andre ved kun å dele linken. Man kan også dele skjerm.",
    backgroundColor: "var(--sky)",
    demo: "https://snakk.olafros.com",
    github: "https://github.com/olros/snakk",
  },
  {
    id: "monopol",
    when: "Påske 2020",
    title: "Monopol Bank",
    description:
      "Som en del av et ønske om å lære meg mer om Firebase, lagde jeg en digital bank for bruk i monopolspill. Brukere kan opprette spill, invitere andre deltagere, gjennomføre transaksjoner og se logger.",
    backgroundColor: "var(--sky)",
    demo: "https://monopol.olafros.com",
    github: "https://github.com/olros/monopoly-bank",
  },
  {
    id: "sanntid",
    when: "2016 - 2018",
    title: "Sanntid",
    description:
      "Prosjekt jeg hold på med gjennom VGS og som lærte meg HTML, CSS og Javascript. Bruker EnTur sine api'er til å vise avgangstider og reiseruter for kollektivtransport i hele Norge. Laget helt uten noe rammeverk.",
    backgroundColor: "var(--sky)",
    demo: "https://sanntid.olafros.com",
    github: "https://github.com/olros/sanntid",
  },
  {
    id: "vgs",
    when: "2016 - 2019",
    title: "VGS",
    description: "En samling av diverse prosjekter og sider jeg lagde på VGS.",
    backgroundColor: "var(--sky)",
    demo: "https://vgs.olafros.com",
  },
];

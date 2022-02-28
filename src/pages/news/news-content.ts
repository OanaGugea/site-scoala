export interface INewsContentHelper {
  link: string;
  description: string;
}

export interface INewsContent {
  title: string;
  content: string;
  utils?: INewsContentHelper[];
}

export const newsContentArray: INewsContent[] = [
  {
    title:
      "Informare privind gradul de vaccinare în rândul personalului angajat",
    content:
      "Potrivit datelor centralizate la nivelul instituției, la data de 01.11.2021, rata generală de vaccinare a ajuns" +
      "la 65% din totalul celor 23 de angajați ai unității de învățământ. Raportat la personalul care deține funcții" +
      "de conducere, ponderea celor vaccinați este de 100%.",
  },
  {
    title: "Copii pentru copii!",
    content:
      "Campania derulată de radio Reșița primeste sprijin din partea Inspectoratului Școlar Județean. Începând de luni, 28 februarie, în toate unitățile de învățământ din Caraș Severin, dascălii, elevii și părinții pot dona produse de igienă, alimente neperisabile, saci de dormit, pături și mai ales produse pentru copii pentru refugiații ucraineni.\n" +
      "Radio România Reșița va difuza de luni scurte reportaje realizate cu elevi care sunt îndemnați să transmită mesajele lor către copiii sosiți la noi în țară, inclusiv cu elevii din comunitatea ucraineană care se pot face înțeleși de copiii refugiați.\n" +
      "Pentru mediul online propunem o serie de videoclipuri scurte realizate de copii cu desene, îndemnuri, prezentarea locurilor frumoase din România. \n" +
      "Tik-Tok, Instagram, Snapchat sunt rețelele cele mai utilizate de copii ceea ce înseamnă că radioul ar trebui să vină cu filmulețe care pot fi sharuite.\n" +
      "Când fugi din calea războiului, ultimul lucru pe care îl iei cu tine sunt jucăriile copiilor. O jucărie primită în dar la intrarea într-o țară străină este cel mai ușor mod de a aduce un zâmbet pe chipul unui copil speriat.",
  },
  // {
  //   title: "Post vacant",
  //   content: "Post vacant de ingrijitor!",
  //   utils: [
  //     {
  //       description: "Fisa Post",
  //       link: "https://www.cntlr.ro/wp-content/uploads/2021/11/FISA-POST-INGRIJITOR.pdf",
  //     },
  //   ],
  // },
];

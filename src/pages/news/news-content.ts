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
    title: "Informare privind gradul de vaccinare în rândul personalului angajat",
    content:
      "Potrivit datelor centralizate la nivelul instituției, la data de 01.11.2021, rata generală de vaccinare a ajuns" + 
      "la 65% din totalul celor 23 de angajați ai unității de învățământ. Raportat la personalul care deține funcții" +
      "de conducere, ponderea celor vaccinați este de 100%.",
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

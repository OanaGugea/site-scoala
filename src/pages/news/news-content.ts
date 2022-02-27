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
    title: "Informare",
    content:
      "Gradul de vaccinare în rândul personalului angajat în Școala Gimnazială Slatina-Timiș: la nivelul instituției, rata generală de vaccinare a angajaților este de x%.",
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

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
      "Gradul de vaccinare in randul personalului angajat in Scoala Gimanziala Slatina-Timis: la nivelul institiutiei, rata generala de vaccinare a angajatilor este de x%.",
  },
  {
    title: "Post vacant",
    content: "Post vacant de ingrijitor!",
    utils: [
      {
        description: "Fisa Post",
        link: "https://www.cntlr.ro/wp-content/uploads/2021/11/FISA-POST-INGRIJITOR.pdf",
      },
    ],
  },
];

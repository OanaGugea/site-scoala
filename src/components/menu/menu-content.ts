export interface IMenu {
  name: string;
  subMenu: ISubMenu[];
  link?: string;
}

export interface ISubMenu {
  name: string;
  link: string;
}

export const menuArray: IMenu[] = [
  {
    name: "Acasă",
    subMenu: [],
    link: "/",
  },
  {
    name: "Despre",
    subMenu: [
      {
        name: "Scurt istoric",
        link: "/istoric",
      },
      {
        name: "Structuri",
        link: "/structuri",
      },
      {
        name: "Baza materială",
        link: "/laboratoare",
      },
      {
        name: "Misiunea & Viziunea",
        link: "/misiunea",
      },
    ],
  },
  {
    name: "Elevi",
    subMenu: [
      {
        name: "Clase",
        link: "/clase",
      },
      {
        name: "Lideri pe clase",
        link: "/lideri",
      },
      {
        name: "Consiliul elevilor",
        link: "/consiliu",
      },
      {
        name: "Excelență",
        link: "/excelenta",
      },
    ],
  },
  {
    name: "Profesori",
    subMenu: [],
    link: "/profesori",
  },
  {
    name: "Părinți",
    subMenu: [
      {
        name: "Asociația de părinți",
        link: "/acociatia",
      },
      {
        name: "Comitete de părinți",
        link: "/comitete",
      },
    ],
  },
  {
    name: "Proiecte și parteneriate",
    subMenu: [
      {
        name: "Proiecte și acțiuni locale",
        link: "/local",
      },
      {
        name: "Proiecte regionale",
        link: "/regional",
      },
      {
        name: "Proiecte naționale",
        link: "/national",
      },
      {
        name: "Proiecte internaționale",
        link: "/international",
      },
      {
        name: "Parteneriate",
        link: "/parteneriate",
      },
    ],
  },
  // {
  //   name: "Utile",
  //   subMenu: [],
  //   link: "/utile",
  // },
  {
    name: "Extracurriculare",
    subMenu: [],
    link: "/extra",
  },
  {
    name: "Anunțuri",
    subMenu: [],
    link: "/anunturi",
  },
  {
    name: "Galerie Foto",
    subMenu: [],
    link: "/galerie",
  },
  {
    name: "Contact",
    subMenu: [],
    link: "/contact",
  },
];

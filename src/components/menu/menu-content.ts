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
        name: "Structuri",
        link: "/structuri",
      },
      {
        name: "Laboratoare",
        link: "/laboratoare",
      },
      {
        name: "Misiunea & Viziunea",
        link: "/misiunea",
      },
    ],
  },
  // {
  //     name: 'Elevi',
  //     subMenu: [
  //         {
  //             name: 'Clase',
  //             link: 'link 1'
  //         },
  //     ]
  // },
  {
    name: "Utile",
    subMenu: [],
    link: "/utile",
  },
  // {
  //     name: 'Proiecte',
  //     subMenu: []
  // },
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

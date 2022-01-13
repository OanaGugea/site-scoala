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
        name: 'Acasa',
        subMenu: [],
        link: '/'
    },
    {
        name: 'Despre',
        subMenu: [
            {
                name: 'Structuri',
                link: '/structuri'
            },
            {
                name: 'Laboratoare',
                link: 'link 2'
            },
            {
                name: 'Misiunea & Viziunea',
                link: 'link 2'
            }
        ]
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
        name: 'Utile',
        subMenu: [],
        link: '/utile'
    },
    // {
    //     name: 'Proiecte',
    //     subMenu: []
    // },
    {
        name: 'Anunturi',
        subMenu: [],
        link: '/anunturi'
    },
    {
        name: 'Galerie Foto',
        subMenu: [],
        link: '/galerie'
    },
    {
        name: 'Contact',
        subMenu: [],
        link: '/contact'
    }
]
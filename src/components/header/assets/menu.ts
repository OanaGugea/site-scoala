export interface IMenu {
    name: string;
    subMenu: ISubMenu[];
}

export interface ISubMenu {
    name: string;
    link: string;
}

export const menuArray: IMenu[] = [
    {
        name: 'Acasa',
        subMenu: []
    },
    {
        name: 'Despre',
        subMenu: [
            {
                name: 'Structuri',
                link: 'link 1'
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
        subMenu: []
    },
    // {
    //     name: 'Proiecte',
    //     subMenu: []
    // },
    {
        name: 'Anunturi',
        subMenu: []
    },
    {
        name: 'Galerie Foto',
        subMenu: []
    },
    {
        name: 'Contact',
        subMenu: []
    }
]
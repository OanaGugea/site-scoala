export interface BuildingDetail {
    title: string;
    description: string;
    imageTitle: string;
}

export const buildingsArray: BuildingDetail[] = [
    {
        title: "Scoala Gimaziala Slatina-Timis corp A",
        description: "In corpul A al Scolii Gimaziale Slatina Timis se afla scoala primara. " +
            "Aceasta cladire deserveste pentru clasele pregatitoare, I, II, III si IV.",
        imageTitle: "sigla.png"
    },
    {
        title: "Scoala Gimaziala Slatina-Timis corp B",
        description: "In corpul A al Scolii Gimaziale Slatina Timis se afla scoala gimaziala. " +
            "Aceasta cladire deserveste pentru clasele V-VIII.",
        imageTitle: "corpB.jpeg"
    },
    {
        title: "Gradinita Slatina-Timis",
        description: "Gradinita se afla intr-o cladire adiacenta scolii.",
        imageTitle: "sigla.png"
    },
    {
        title: "Scoala Primara Ilova",
        description: "In satul Ilova se regaseste structura corespunzatoare scolii primare din localitate (clasele pregatitoare, I, II, III si IV).",
        imageTitle: "primar-ilova.jpeg"
    },
    {
        title: "Gradinita Ilova",
        description: "In satul Ilova se regaseste structura corespunzatoare gradinitei din localitate.",
        imageTitle: "sigla.png"
    }
]
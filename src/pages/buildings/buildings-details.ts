export interface BuildingDetail {
  title: string;
  description: string;
  imageTitle?: string;
  classImageTitle?: string;
}

export const buildingsArray: BuildingDetail[] = [
  {
    title: "Școala Gimnazială Slatina-Timiș corp A",
    description:
      "În corpul A al Școlii Gimnaziale Slatina Timiș se află școala primară. " +
      "Această clădire deservește pentru clasele pregătitoare, I, II, III și IV.",
    imageTitle: "primarSlatina",
    classImageTitle: "clasaSlatinaPrimar",
  },
  {
    title: "Școala Gimnazială Slatina-Timiș corp B",
    description:
      "În corpul A al Școlii Gimaziale Slatina Timiș se află școala gimnazială. " +
      "Această clădire deservește pentru clasele V-VIII.",
    imageTitle: "frontPart",
    classImageTitle: "clasaSlatinaGimnaziu",
  },
  {
    title: "Grădinița Slatina-Timiș",
    description: "Grădinița se află într-o clădire adiacentă școlii.",
    imageTitle: "gradinitaSlatina",
    classImageTitle: "clasaSlatinaGradinita",
  },
  {
    title: "Școala Primară Ilova",
    description:
      "În satul Ilova se regăsește structura corespunzătoare școlii primare din localitate (clasele pregătitoare, I, II, III si IV).",
    imageTitle: "primarIlova",
    classImageTitle: "clasaIlovaPrimar",
  },
  {
    title: "Grădinița Ilova",
    description:
      "În satul Ilova se regăsește structura corespunzătoare gradinitei din localitate.",
    imageTitle: "primarIlova",
    classImageTitle: "clasaIlovaGradinita",
  },
];

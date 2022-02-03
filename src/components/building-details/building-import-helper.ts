// images import
import sigla from "../../assets/sigla.png";
import primarIlova from "../../assets/primar-ilova.jpeg";
import frontPart from "../../assets/front-part.jpeg";
import primarSlatina from "../../assets/primar-slatina.jpeg";
import clasaSlatinaGimnaziu from "../../assets/slatina-gimnaziu/slatina-gimanziu-4.jpeg";
import clasaSlatinaPrimar from "../../assets/slatina-primar/slatina-primar-2.jpeg";
import clasaIlovaPrimar from "../../assets/ilova-primar/ilova-primar-1.jpeg";
import clasaIlovaGradinita from "../../assets/ilova-gradinita/ilova-gradinita-4.jpeg";
import clasaSlatinaGradinita from "../../assets/slatina-gradinita/slatina-gradinita-2.jpeg";

export const extractImageSrc = (title?: string) => {
  switch (title) {
    case "primarIlova":
      return primarIlova;
    case "frontPart":
      return frontPart;
    case "primarSlatina":
      return primarSlatina;
    case "clasaSlatinaGimnaziu":
      return clasaSlatinaGimnaziu;
    case "clasaSlatinaPrimar":
      return clasaSlatinaPrimar;
    case "clasaIlovaPrimar":
      return clasaIlovaPrimar;
    case "clasaIlovaGradinita":
      return clasaIlovaGradinita;
    case "clasaSlatinaGradinita":
      return clasaSlatinaGradinita;
    default:
      return sigla;
  }
};

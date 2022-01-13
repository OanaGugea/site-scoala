// images import
import sigla from "../../assets/sigla.png";
import primarIlova from "../../assets/primar-ilova.jpeg";

export const extractImageSrc = (title?: string) => {
  switch (title) {
    case "primarIlova":
      return primarIlova;
    default:
      return sigla;
  }
};

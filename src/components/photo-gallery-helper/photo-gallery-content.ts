import { IGalleryContent } from "./model";
import { slatinaGimnaziuGallery } from "./slatina-gimnaziu";
import { slatinaPrimarGallery } from "./slatina-primar";
import { slatinaGradinitaGallery } from "./slatina-gradinita";
import { ilovaPrimarGallery } from "./ilova-primar";
import { ilovaGradinitaGallery } from "./ilova-gradinita";

export const galleryContent: IGalleryContent[] = [
  ...slatinaGimnaziuGallery,
  ...slatinaPrimarGallery,
  ...slatinaGradinitaGallery,
  ...ilovaPrimarGallery,
  ...ilovaGradinitaGallery,
];

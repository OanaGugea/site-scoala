import { BuildingAccordion } from "../../components/building-details/BuildingAccordion";
import { buildingsArray } from "./buildings-details";

export const Buildings = () => {
  return (
    <>
      {buildingsArray.map((item) => (
        <BuildingAccordion
          title={item.title}
          description={item.description}
          imageTitle={item.imageTitle}
          roomImageTitle={item.classImageTitle}
        />
      ))}
    </>
  );
};

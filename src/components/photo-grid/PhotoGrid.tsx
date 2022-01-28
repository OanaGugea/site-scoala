import frontPart from "./../../assets/front-part.jpeg";
import backPart from "./../../assets/back-yard.jpeg";
import primarSlatina from "./../../assets/primar-slatina.jpeg";
import primarIlova from "./../../assets/primar-ilova.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const useStyle = makeStyles(() => ({
  imageSlider: {
    height: "300px",
    "& .awssld__bullets": {
      bottom: 0,
      zIndex: 2,
    },
  },
}));

export const PhotoGrid = () => {
  const classes = useStyle();
  const sliderImages = [frontPart, backPart, primarSlatina, primarIlova];
  return (
    <AwesomeSlider className={classes.imageSlider}>
      {sliderImages.map((imgSrc) => {
        return (
          <div>
            <img src={imgSrc} alt={`${imgSrc}`} />
          </div>
        );
      })}
    </AwesomeSlider>
  );
};

export default PhotoGrid;

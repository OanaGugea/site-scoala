import backPart from "./../../assets/back-yard.jpeg";
import collage from "../../assets/BuildingsCollage.jpg"
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
  const sliderImages = [backPart, collage ];
  return (
    <AwesomeSlider className={classes.imageSlider}>
      {sliderImages.map((imgSrc) => {
        return (
          <div>
            <img src={imgSrc} alt={`${imgSrc}`} height="100%" width="100%"/>
          </div>
        );
      })}
    </AwesomeSlider>
  );
};

export default PhotoGrid;

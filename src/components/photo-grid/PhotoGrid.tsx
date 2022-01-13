import frontPart from "./../../assets/front-part.jpeg";
import backPart from "./../../assets/back-yard.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const useStyle = makeStyles(() => ({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  photo: {
    height: "300px",
    margin: "0 15px",
  },
  photoWidth: {
    width: "300px",
  },
}));

export const PhotoGrid = () => {
  const classes = useStyle();
  return (
    <AwesomeSlider className={classes.photo}>
      <div>
        <img src={frontPart} alt="front-part" />
      </div>
      <div>
        <img src={backPart} alt="back-yard" />
      </div>
    </AwesomeSlider>
  );
};

export default PhotoGrid;

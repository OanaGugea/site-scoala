import { makeStyles } from "@material-ui/core/styles";
import mission from "../../assets/misiunea.jpg";
import vision from "../../assets/viziunea.jpg";

const useStyle = makeStyles(() => ({
  photo: {
    height: "500px",
    width: "500px",
    margin: "5px 15px",
  },
  photoContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const MissionAndVision = () => {
  const classes = useStyle();
  return (
    <div className={classes.photoContainer}>
      <img src={mission} alt={`misiunea`} className={classes.photo} />
      <img src={vision} alt={`viziunea`} className={classes.photo} />
    </div>
  );
};

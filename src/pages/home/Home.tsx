import { PhotoGrid } from "../../components/photo-grid/PhotoGrid";
import { GeneralInformation } from "./GeneralInformation";
import { News } from "./News";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  divider: {
    height: "400px",
    marginTop: "5px",
  },
}));

export const Home = () => {
  const classes = useStyle();
  return (
    <>
      <PhotoGrid />
      <div className={classes.container}>
        <GeneralInformation />
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <News />
      </div>
    </>
  );
};

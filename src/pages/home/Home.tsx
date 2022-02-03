import { PhotoGrid } from "../../components/photo-grid/PhotoGrid";
import { GeneralInformation } from "./GeneralInformation";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { UtilsPage } from "../utils/UtilsPage";

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  divider: {
    height: "400px",
    marginTop: "5px",
  },
  sectionContainer: {
    margin: "1%",
    width: "30%",
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
        <div className={classes.sectionContainer}>
          <UtilsPage />
        </div>
      </div>
    </>
  );
};

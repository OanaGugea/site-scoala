import { PhotoGrid } from "../../components/photo-grid/PhotoGrid";
import { GeneralInformation } from "./GeneralInformation";
import { News } from "./News";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const Home = () => {
  const classes = useStyle();
  return (
    <>
      <PhotoGrid />
      <div className={classes.container}>
        <GeneralInformation />
        <News />
      </div>
    </>
  );
};

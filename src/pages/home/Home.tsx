import { PhotoGrid } from "../../components/photo-grid/PhotoGrid";
import { Info } from "./info";
import { News } from "./news";
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
        <Info />
        <News />
      </div>
    </>
  );
};

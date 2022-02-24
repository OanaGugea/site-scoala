// @ts-ignore
import Gallery from "react-grid-gallery";
import { makeStyles } from "@material-ui/core/styles";
import { labsGallery } from "../../components/photo-gallery-helper/labs-gallery-helper";

const useStyle = makeStyles(() => ({
  container: {
    margin: 2,
  },
}));

export const LabsPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Gallery images={labsGallery} />
    </div>
  );
};

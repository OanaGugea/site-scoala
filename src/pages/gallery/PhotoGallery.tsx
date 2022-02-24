// @ts-ignore
import Gallery from "react-grid-gallery";
import { galleryContent } from "../../components/photo-gallery-helper/photo-gallery-content";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  container: {
    margin: 2,
  },
}));

export const PhotoGallery = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Gallery images={galleryContent} />
    </div>
  );
};

import { makeStyles } from "@material-ui/core/styles";
import { newsSectionContent } from "./news-content";

const useStyle = makeStyles(() => ({
  newsContainer: {
    margin: "1%",
    width: "30%",
  },
}));

export const News = () => {
  const classes = useStyle();

  const renderNewsSectionContent = () => {
    return newsSectionContent.map((content) => {
      return (
        <>
          <li>
            <a href={content.destination}>{content.title}</a>
          </li>
          <br />
        </>
      );
    });
  };

  return (
    <div className={classes.newsContainer}>
      <h2>Anunțuri</h2>
      <ul>{renderNewsSectionContent()}</ul>
    </div>
  );
};

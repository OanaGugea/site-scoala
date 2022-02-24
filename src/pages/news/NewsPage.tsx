import { Box, Card, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { INewsContentHelper, newsContentArray } from "./news-content";

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "15px",
    justifyContent: "center",
  },
  cardBox: {
    width: "50%",
    padding: "5px",
  },
}));

export const NewsPage = () => {
  const classes = useStyle();

  const renderLinkDisplay = (contentHelper: INewsContentHelper[]) => {
    return (
      <List>
        {contentHelper.map((content) => {
          return (
            <ListItem>
              <a href={content.link} target="_blank" rel="noreferrer noopener">
                {content.description}
              </a>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const renderNewsDisplay = () => {
    return (
      <>
        {newsContentArray.map((content) => {
          return (
            <Box className={classes.container}>
              <Card variant="outlined" className={classes.cardBox}>
                <h2>{content.title}</h2>
                {content.content}
                <br />
                {content.utils && renderLinkDisplay(content.utils)}
              </Card>
            </Box>
          );
        })}
      </>
    );
  };

  return <>{renderNewsDisplay()}</>;
};

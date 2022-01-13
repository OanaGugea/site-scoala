import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  newsContainer: {
    marginTop: "50px",
    width: "30%",
  },
}));

export const News = () => {
  const classes = useStyle();
  return (
    <div className={classes.newsContainer}>
      <h2>Anunturi</h2>
      <ul>
        <li>AAA</li>
        <li>BBB</li>
      </ul>
    </div>
  );
};

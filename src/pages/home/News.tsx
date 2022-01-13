import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  newsContainer: {
    margin: "1%",
    width: "30%",
  },
}));

export const News = () => {
  const classes = useStyle();
  return (
    <div className={classes.newsContainer}>
      <h2>Anunțuri</h2>
      <ul>
        <li>Structura an scolar 2021-2022</li>
        <br />
        <li>Posturi vacante</li>
      </ul>
    </div>
  );
};

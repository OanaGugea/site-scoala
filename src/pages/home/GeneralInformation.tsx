import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  textContainer: {
    marginTop: "50px",
    width: "70%",
    textAlign: "center",
  },
}));

export const GeneralInformation = () => {
  const classes = useStyle();
  return (
    <div className={classes.textContainer}>
      <h2>General Infos</h2>
    </div>
  );
};

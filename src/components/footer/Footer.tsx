import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  appBar: {
    backgroundColor: "#Acc980",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    height: "50px",
  },
}));

export const Footer = () => {
  const classes = useStyle();
  return <footer className={classes.appBar}>© 2021 Ringaro</footer>;
};

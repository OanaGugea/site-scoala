import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles(() => ({
  appBar: {
    backgroundColor: "#Acc980",
    display: "grid",
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
  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Ringaro
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

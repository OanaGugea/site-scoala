import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { extractImageSrc } from "./building-import-helper";

const useStyle = makeStyles(() => ({
  photo: {
    height: "200px",
    width: "250px",
    margin: "0 15px",
  },
}));

export const BuildingAccordion = (props: {
  title: string;
  description: string;
  imageTitle?: string;
  roomImageTitle?: string;
}) => {
  const classes = useStyle();

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>{props.title}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            src={extractImageSrc(props.imageTitle)}
            alt={`${props.imageTitle}`}
            className={classes.photo}
          />
          <img
            src={extractImageSrc(props.roomImageTitle)}
            alt={`${props.roomImageTitle}`}
            className={classes.photo}
          />
          <Typography>{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

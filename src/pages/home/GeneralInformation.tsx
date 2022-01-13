import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
// @ts-ignore
import generalInfo from "../../files/generalInfo.md";
import { useEffect, useState } from "react";

const useStyle = makeStyles(() => ({
  textContainer: {
    margin: "1%",
    width: "70%",
  },
}));

export const GeneralInformation = () => {
  const classes = useStyle();
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(generalInfo)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
      });
  }, []);

  return (
    <div className={classes.textContainer}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

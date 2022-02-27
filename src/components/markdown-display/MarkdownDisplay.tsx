import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const useStyle = makeStyles(() => ({
  textContainer: {
    margin: "1%",
    width: "70%",
  },
}));

export const MarkdownDisplay = (props: { fileName: string }) => {
  const classes = useStyle();
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(props.fileName)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
      });
  }, [props.fileName]);

  return (
    <div className={classes.textContainer}>
      <ReactMarkdown linkTarget="_blank" >{markdown}</ReactMarkdown>
    </div>
  );
};
